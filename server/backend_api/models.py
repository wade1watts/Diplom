from django.db import models

class Coordinates(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    city = models.CharField(max_length=50)
    # id = models.AutoField(primary_key=True)