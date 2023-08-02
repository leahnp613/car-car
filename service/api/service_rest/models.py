from django.db import models


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    sold = models.BooleanField(default= False)


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=200)
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="Technician",
        on_delete=models.CASCADE,
    )
