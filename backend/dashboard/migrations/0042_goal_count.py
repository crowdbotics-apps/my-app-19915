# Generated by Django 2.2.24 on 2021-07-07 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0041_auto_20210707_0617'),
    ]

    operations = [
        migrations.AddField(
            model_name='goal',
            name='count',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
