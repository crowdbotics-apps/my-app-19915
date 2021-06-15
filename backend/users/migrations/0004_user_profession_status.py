# Generated by Django 2.2.19 on 2021-03-01 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210301_1225'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profession_status',
            field=models.CharField(choices=[(14, 'Employee'), (15, 'Unemployee'), (16, 'Business')], default=0, max_length=50),
            preserve_default=False,
        ),
    ]
