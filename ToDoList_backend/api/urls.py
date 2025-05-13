from django.urls import path, re_path
from .views import TasksView, CreateTasksView, UpdateTaskView, DeleteTaskView, FrontendAppView

urlpatterns = [
    path('tasks/', TasksView.as_view()),
    path('tasks/create/', CreateTasksView.as_view()),
    path('tasks/<int:id>/update/', UpdateTaskView.as_view()),
    path('tasks/<int:id>/delete/', DeleteTaskView.as_view()),
    re_path(r"^.*$", FrontendAppView.as_view(), name="frontend"),
]