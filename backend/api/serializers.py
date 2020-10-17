from rest_framework import serializers
from stopwatch.models import StopwatchLog

class StopwatchLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = StopwatchLog
        fields = ['id', 'timestamp', 'log_type']
