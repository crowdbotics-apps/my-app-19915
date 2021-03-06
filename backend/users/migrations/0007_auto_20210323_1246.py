# Generated by Django 2.2.19 on 2021-03-23 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20210309_1246'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='children',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='goals',
            field=models.CharField(blank=True, choices=[(5, 'I want to increase happiness'), (6, 'I want to express gratitude'), (7, 'I want an energy boost'), (8, 'I want to feel more confident'), (9, 'I want to feel more relaxed'), (10, 'I want to feel peace'), (11, 'I want to reduce stress'), (12, 'I want to calm anxiety'), (13, 'I want to lower my blood pressure/heart rate')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='profession_status',
            field=models.CharField(blank=True, choices=[(14, 'Employee'), (15, 'Unemployee'), (16, 'Business')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='relationship_status',
            field=models.CharField(blank=True, choices=[(2, 'Married'), (3, 'Unmarried'), (4, 'In a relationship')], max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='sex',
            field=models.CharField(blank=True, choices=[(0, 'Male'), (1, 'Female')], max_length=100, null=True),
        ),
    ]
