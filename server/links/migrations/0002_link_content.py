# Generated by Django 3.0.6 on 2020-05-24 05:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('links', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='link',
            name='content',
            field=models.TextField(blank=True),
        ),
    ]
