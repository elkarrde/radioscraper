# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-31 11:49
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('radio', '0005_radio_derived_data'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='radio',
            options={'ordering': ['name']},
        ),
    ]
