# Generated by Django 5.0.6 on 2024-06-03 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blogs', '0007_alter_blogpost_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='post_image',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]
