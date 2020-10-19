from datetime import datetime
from django.db import models
from django_extensions.db.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _

class StopwatchLog(TimeStampedModel):
    timestamp = models.DateTimeField(
        verbose_name=_('TimeStamp'),
    )

    log_type = models.CharField(
        verbose_name=_('Log Type'),
        max_length=15,
        blank=True,
        null=True
    )

    class Meta:
        ordering = ('-id', )
    
    def get_formatted_timestamp(self):
        return datetime.strftime(self.timestamp, "%Y-%m-%d %H:%I:%S")
