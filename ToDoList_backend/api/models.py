from django.db import models

# Create your models here.
class Tasks(models.Model):
    task = models.CharField(max_length=255)
    completed = models.BooleanField(null=False, default=False)