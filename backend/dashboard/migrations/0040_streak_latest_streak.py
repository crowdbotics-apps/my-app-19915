# Generated by Django 2.2.24 on 2021-07-06 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0039_auto_20210706_0635'),
    ]

    operations = [
        migrations.AddField(
            model_name='streak',
            name='latest_streak',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
