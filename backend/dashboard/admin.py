from django.contrib import admin
from dashboard.models import Quote, Smile, SmileExercise, SmileCommunity, SmileScience

# Register your models here.


class QuoteAdmin(admin.ModelAdmin):
    list_display = ['quote', 'created']


class SmileAdmin(admin.ModelAdmin):
    list_display = ['user', 'second', 'created']


class SmileExerciseAdmin(admin.ModelAdmin):
    list_display = ['title', 'image', 'description', 'created']


class SmileCommunityAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'image', 'created']


class SmileScienceAdmin(admin.ModelAdmin):
    list_display = ['article_name', 'description', 'image', 'created']


admin.site.register(Quote, QuoteAdmin)
admin.site.register(Smile, SmileAdmin)
admin.site.register(SmileExercise, SmileExerciseAdmin)
admin.site.register(SmileCommunity, SmileCommunityAdmin)
admin.site.register(SmileScience, SmileScienceAdmin)
