# Generated by Django 2.2.24 on 2021-07-07 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0040_streak_latest_streak'),
    ]

    operations = [
        migrations.AlterField(
            model_name='smile',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
