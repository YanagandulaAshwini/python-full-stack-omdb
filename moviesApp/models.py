from django.db import models

# Create your models here.
class MoviesApp(models.Model):
    MovieName = models.CharField(max_length=100, blank=False, default='')
    Actors = models.CharField(max_length=300,blank=False, default='')
    Director = models.CharField(max_length=200, blank=False, default='')
    Genre = models.CharField(max_length=200,blank=False, default='')
    Duration = models.CharField(max_length=100, blank=False, default='')