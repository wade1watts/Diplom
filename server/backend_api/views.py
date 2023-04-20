from django.shortcuts import render
from rest_framework.views import APIView
from .models import Coordinates
from .serializer import CoordinatesSerializer
from rest_framework.response import Response
from .models import Coordinates
from rest_framework import generics

class CoordinatesView(APIView):
    def get(self, request):
        output = [
            {
                'longitude': output.longitude,
                'latitude': output.latitude,
                'city': output.city,
                'id': output.id
            } for output in Coordinates.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = CoordinatesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class MarkerById(APIView):
    def get(self, request, pk):
        queryset = Coordinates.objects.filter(pk=pk)
        serializer =  CoordinatesSerializer(queryset, many=True)
        return Response(serializer.data)

class MarkerAPIUpdate(generics.UpdateAPIView):
    queryset = Coordinates.objects.all()
    serializer_class = CoordinatesSerializer