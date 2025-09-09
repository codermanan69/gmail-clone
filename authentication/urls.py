from django.urls import path
from .views import get_emails, create_email, dashboard

urlpatterns = [
    path("", dashboard, name="dashboard"),        # root path -> dashboard
    path("emails/", get_emails, name="get_emails"),
    path("create-email/", create_email, name="create_email"),
]
