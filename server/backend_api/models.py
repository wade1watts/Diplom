from django.db import models

class Coordinates(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    city = models.CharField(max_length=50, null=True)
    mil_image_url = models.TextField(null=True)
