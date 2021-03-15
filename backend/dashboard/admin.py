from django.contrib import admin
from dashboard.models import Quote, Smile

# Register your models here.


class QuoteAdmin(admin.ModelAdmin):
    list_display = ['quote', 'created']


class SmileAdmin(admin.ModelAdmin):
    list_display = ['user', 'second', 'created']


admin.site.register(Quote, QuoteAdmin)
admin.site.register(Smile, SmileAdmin)
