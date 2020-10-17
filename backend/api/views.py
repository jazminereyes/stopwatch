from django.shortcuts import render
from rest_framework import generics
from stopwatch.models import StopwatchLog
from . import serializers

class LogListAPIView(generics.ListCreateAPIView):
    queryset = StopwatchLog.objects.all()
    serializer_class = serializers.StopwatchLogSerializer


class LogDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StopwatchLog.objects.all()
    serializer_class = serializers.StopwatchLogSerializer
