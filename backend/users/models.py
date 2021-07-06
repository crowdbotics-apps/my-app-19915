from django.contrib.auth.models import AbstractUser
from django.core.mail import EmailMultiAlternatives
from django.db import models
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django_rest_passwordreset.signals import reset_password_token_created
from multiselectfield import MultiSelectField
from rest_framework.authtoken.models import Token


class User(AbstractUser):
    Male = 0
    Female = 1
    Other = 2

    SEX_CHOICE = (
        (Male, 'Male'),
        (Female, 'Female'),
        (Other, 'Other'),
    )
    Married = 0
    Unmarried = 1

    RELATIONSHIP_STATUS = (
        (Married, 'Married'),
        (Unmarried, 'Unmarried'),
    )

    I_want_to_increase_happiness = 0
    I_want_to_express_gratitude = 1
    I_want_an_energy_boost = 2
    I_want_to_feel_more_confident = 3
    I_want_to_feel_more_relaxed = 4
    I_want_to_feel_peace = 5
    I_want_to_reduce_stress = 6
    I_want_to_calm_anxiety = 7
    I_want_to_lower_my_blood_pressure_heart_rate = 8

    GOALS = (
        (I_want_to_increase_happiness, 'I want to increase happiness'),
        (I_want_to_express_gratitude, 'I want to express gratitude'),
        (I_want_an_energy_boost, 'I want an energy boost'),
        (I_want_to_feel_more_confident, 'I want to feel more confident'),
        (I_want_to_feel_more_relaxed, 'I want to feel more relaxed'),
        (I_want_to_feel_peace, 'I want to feel peace'),
        (I_want_to_reduce_stress, 'I want to reduce stress'),
        (I_want_to_calm_anxiety, 'I want to calm anxiety'),
        (I_want_to_lower_my_blood_pressure_heart_rate, 'I want to lower my blood pressure/heart rate'),
    )

    Employee = 0
    UnEmployee = 1
    Business = 2

    PROFESSIONAL_STATUS = (
        (Employee, 'Employee'),
        (UnEmployee, 'UnEmployee'),
        (Business, 'Business')
    )
    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    age = models.CharField(max_length=10, null=True, blank=True)
    gender = models.CharField(choices=SEX_CHOICE, max_length=100, null=True, blank=True)
    relationship_status = models.CharField(choices=RELATIONSHIP_STATUS, max_length=100, null=True, blank=True)
    children = models.BooleanField(default=False, null=True, blank=True)
    profession_status = models.CharField(choices=PROFESSIONAL_STATUS, max_length=50, null=True, blank=True)
    goals = MultiSelectField(choices=GOALS,  null=True, blank=True)
    image = models.ImageField(upload_to="user", null=True, blank=True)
    coin_balance = models.FloatField(default=0.00)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    # send an e-mail to the user
    context = {
        'username': reset_password_token.user.get_full_name,
        'reset_password_token': reset_password_token.key
    }
    # render email text
    email_html_message = render_to_string('email/user_reset_password.html', context)
    email_plaintext_message = render_to_string('email/user_reset_password.txt', context)
    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Smiling app"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@smileapp.com",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()