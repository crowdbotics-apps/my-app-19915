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
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)


class SmileExercise(models.Model):
    exercise_name = models.CharField(max_length=200)
    image_or_video = models.FileField(upload_to='smile_exercise/')
    title = models.CharField(max_length=200)
    description = models.TextField()
    is_active = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Resource(models.Model):
    Smile_Science = "Smile Science"
    Community = "Community"
    Notification = "Notification"
    Level = "Level"

    Resource_Choice = (
        (Smile_Science, 'Smile Science'),
        (Community, 'Community'),
        (Notification, 'Notification'),
        (Level, 'Level')
    )
    resource_type = models.CharField(choices=Resource_Choice, max_length=50, null=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="resource", null=True, blank=True)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class ResourceItem(models.Model):
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE, related_name="resource_item")
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='smile_community/')
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class FavoriteExercise(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_favorite')
    favorite_exercise = models.ForeignKey(SmileExercise, on_delete=models.CASCADE, related_name='favorite')
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)


class Goal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_goal")
    goal_second = models.IntegerField()
    created = models.DateTimeField(editable=True)
    # created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)


class Streak(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_streak")
    max_streak = models.IntegerField()
    latest_streak = models.IntegerField(null=True, blank=True)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)
