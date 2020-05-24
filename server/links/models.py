from django.db import models
from datetime import date
from django.conf import settings

# Create your models here.


class Link(models.Model):
    img_url = models.URLField()
    url = models.URLField()
    title = models.TextField(blank=True)
    description = models.TextField(blank=True)
    content = models.TextField(blank=True)
    date = models.DateField(auto_now=True)
    posted_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)
