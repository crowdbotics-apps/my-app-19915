from django.contrib.auth.models import AbstractUser
from django.core.mail import EmailMultiAlternatives
from django.db import models
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django_rest_passwordreset.signals import reset_password_token_created
from multiselectfield import MultiSelectField


class User(AbstractUser):
    Male = 0
    Female = 1

    SEX_CHOICE = (
        (Male, 'Male'),
        (Female, 'Female'),
    )
    Married = 2
    Unmarried = 3
    In_a_relationship = 4

    RELATIONSHIP_STATUS = (
        (Married, 'Married'),
        (Unmarried, 'Unmarried'),
        (In_a_relationship, 'In a relationship'),
    )

    I_want_to_increase_happiness = 5
    I_want_to_express_gratitude = 6
    I_want_an_energy_boost = 7
    I_want_to_feel_more_confident = 8
    I_want_to_feel_more_relaxed = 9
    I_want_to_feel_peace = 10
    I_want_to_reduce_stress = 11
    I_want_to_calm_anxiety = 12
    I_want_to_lower_my_blood_pressure_heart_rate = 13

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

    Employee = 14
    UnEmployee = 15
    Business = 16

    PROFESSIONAL_STATUS = (
        (Employee, 'Employee'),
        (UnEmployee, 'Unemployee'),
        (Business, 'Business')
    )
    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    age = models.IntegerField(null=True, blank=True)
    sex = models.CharField(choices=SEX_CHOICE, max_length=100, null=True, blank=True)
    relationship_status = models.CharField(choices=RELATIONSHIP_STATUS, max_length=100, null=True, blank=True)
    children = models.BooleanField(default=False, null=True, blank=True)
    profession_status = models.CharField(choices=PROFESSIONAL_STATUS, max_length=50, null=True, blank=True)
    goals = MultiSelectField(choices=GOALS,  null=True, blank=True)
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
        "Password Reset for {title}".format(title="Wedding's Best"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@weddingbest.com",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()