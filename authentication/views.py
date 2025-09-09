from django.shortcuts import render
from django.http import JsonResponse
from .models import Email
import json

# Create email (can accept dynamic values from frontend)
def create_email(request):
    if request.method == "POST":
        try:
            # If data is coming as JSON from frontend (AJAX or fetch)
            data = json.loads(request.body)

            subject = data.get("subject", "No Subject")
            body = data.get("body", "No Content")
            recipient = data.get("recipient", "user@example.com")
            sender = data.get("sender", "me@example.com")  # default sender

            email = Email.objects.create(
                subject=subject,
                body=body,
                recipient=recipient,
                sender=sender
            )

            return JsonResponse({"message": "Email saved", "id": email.id}, status=201)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Only POST method allowed"}, status=405)


# Get all emails (Inbox)
def get_emails(request):
    emails = Email.objects.all().order_by("-created_at")  # newest first
    data = [
        {
            "id": email.id,
            "from": email.sender,   # use sender instead of recipient
            "subject": email.subject,
            "time": email.created_at.strftime("%I:%M %p"),
            "read": email.read,
        }
        for email in emails
    ]
    return JsonResponse(data, safe=False)


# Render dashboard template
def dashboard(request):
    return render(request, "dashboard.html")
