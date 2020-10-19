from django.shortcuts import render
from rest_framework import generics, mixins, status
from rest_framework.response import Response
from stopwatch.models import StopwatchLog
from . import serializers


class LogListAPIView(generics.GenericAPIView):
    queryset = StopwatchLog.objects.all()
    serializer_class = serializers.StopwatchLogSerializer

    def get(self, request, *args, **kwargs):
        data = []
        for log in self.get_queryset():
            data.append({
                'id': log.pk,
                'timestamp': log.get_formatted_timestamp(),
                'log_type': log.log_type
            })
        return Response(data)
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StopwatchLog.objects.all()
    serializer_class = serializers.StopwatchLogSerializer
