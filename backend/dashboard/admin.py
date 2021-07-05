from django.contrib import admin
from dashboard.models import Quote, Smile, SmileExercise, Resource, ResourceItem, FavoriteExercise, Goal

# Register your models here.


class QuoteAdmin(admin.ModelAdmin):
    list_display = ['quote', 'created']


class SmileAdmin(admin.ModelAdmin):
    list_display = ['user', 'second', 'created']


class SmileExerciseAdmin(admin.ModelAdmin):
    list_display = ["exercise_name", 'title', 'image_or_video', 'description', 'is_active', 'created']


class ResourceAdmin(admin.ModelAdmin):
    list_display = ["title", "description", "created"]


class ResourceItemAdmin(admin.ModelAdmin):
    list_display = ["resource", 'title', 'description', 'created']


class FavoriteExerciseAdmin(admin.ModelAdmin):
    list_display = ['user', 'favorite_exercise',  'created']


class GoalAdmin(admin.ModelAdmin):
    list_display = ["user", "goal_second", "created"]


admin.site.register(Quote, QuoteAdmin)
admin.site.register(Smile, SmileAdmin)
admin.site.register(SmileExercise, SmileExerciseAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(ResourceItem, ResourceItemAdmin)
admin.site.register(FavoriteExercise, FavoriteExerciseAdmin)
admin.site.register(Goal, GoalAdmin)
