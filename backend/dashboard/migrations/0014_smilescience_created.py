# Generated by Django 2.2.19 on 2021-03-15 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0013_smilescience'),
    ]

    operations = [
        migrations.AddField(
            model_name='smilescience',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
