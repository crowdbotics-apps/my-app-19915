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


class SmileExercise(models.Model):
    exercise_name = models.CharField(max_length=200)
    image = models.FileField(upload_to='smile_exercise')
    title = models.CharField(max_length=200)
    description = models.TextField()
    is_active = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class SmileCommunity(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.FileField(upload_to='smile_community')
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class SmileScience(models.Model):
    article_name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.FileField(upload_to='smile_science')
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.article_name


class FavoriteExercise(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_favorite')
    favorite_exercise = models.ForeignKey(SmileExercise, on_delete=models.CASCADE, related_name='favorite')
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)