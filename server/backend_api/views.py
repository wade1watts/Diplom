from django.shortcuts import render
from rest_framework.views import APIView
from .models import Coordinates
from .serializer import CoordinatesSerializer
from rest_framework.response import Response


class CoordinatesView(APIView):
    def get(self, request):
        output = [
            {
                'longitude': output.longitude,
                'latitude': output.latitude,
                'city': output.city
            } for output in Coordinates.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = CoordinatesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


