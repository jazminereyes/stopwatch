from django.db import models
from django_extensions.db.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _

class StopwatchLog(TimeStampedModel):
    timestamp = models.CharField(
        verbose_name=_('TimeStamp'),
        max_length=30,
        blank=True,
        null=True
    )

    log_type = models.CharField(
        verbose_name=_('Log Type'),
        max_length=15,
        blank=True,
        null=True
    )

    class Meta:
        ordering = ('-id', )
