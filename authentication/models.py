from django.db import models

# Create your models here.


class Email(models.Model):
    sender = models.CharField(max_length=100, default="me@example.com")  # who sent it
    recipient = models.CharField(max_length=100)  # to whom
    subject = models.CharField(max_length=200)
    body = models.TextField()
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subject