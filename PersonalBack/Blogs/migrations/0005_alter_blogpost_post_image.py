# Generated by Django 5.0.6 on 2024-05-30 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blogs', '0004_alter_category_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='post_image',
            field=models.FileField(null=True, upload_to='static/images'),
        ),
    ]