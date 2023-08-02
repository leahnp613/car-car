from .api_views import (
    api_list_technician,
    api_show_technician,
    api_show_appointment,
    api_list_appointment,
)
from django.urls import path

urlpatterns = [
    path("appointment/", api_list_appointment, name="api_create_appointment"),
    path("appointment/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path(
        "automobiles/<int:vin_vo/appointment/",
        api_list_appointment,
        name="api_list_appointment",
    ),
    path("technician/", api_list_technician, name="api_list_technician"),
    path("technician/<int:pk>/", api_show_technician, name="api_show_technician"),
]

]
