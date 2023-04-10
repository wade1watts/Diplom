from django.db import models

class Coordinates(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()