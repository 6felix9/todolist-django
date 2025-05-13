from rest_framework import generics, status
from .serializers import TasksSerializer, CreateTaskSerializer
from .models import Tasks
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic import TemplateView

# Create your views here.

class FrontendAppView(TemplateView):
    template_name = "frontend/index.html"

class TasksView(generics.ListAPIView):
    queryset = Tasks.objects.all().order_by('-id') 
    serializer_class = TasksSerializer

class CreateTasksView(APIView):
    serializer_class = CreateTaskSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            task = serializer.validated_data.get('task')
            completed = serializer.validated_data.get('completed')

            new_task = Tasks(task=task, completed=completed)
            new_task.save()

            return Response(TasksSerializer(new_task).data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UpdateTaskView(generics.UpdateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
    lookup_field = 'id' 

class DeleteTaskView(generics.DestroyAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
    lookup_field = 'id'