from django.db import models
from django.contrib.auth.models import User


class HistoryEvent(models.Model):
    headline = models.CharField()
    date = models.DateField()
    image = models.ImageField(optional=True, upload_to="images/history/")
    content = models.TextField()

class HolidayEvent(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    image = models.ImageField(optional = True, upload_to="images/holiday/")
    content = models.TextField()

class BirthdayEvent(models.Model):
    name = models.CharField(max_length=80)
    date = models.DateField()
    image = models.ImageField(optional = True, upload_to="images/bday/")