from rest_framework import serializers
from .models import Coordinates

class CoordinatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinates
        fields = ['longitude', 'latitude', 'city', 'id']