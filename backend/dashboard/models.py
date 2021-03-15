from django.db import models
from users.models import User

# Create your models here.


class Quote(models.Model):
    quote = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.quote


class Smile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    second = models.FloatField()
    created = models.DateTimeField(editable=True)
    # create_on = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return str(self.user)


