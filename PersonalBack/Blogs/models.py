from django.db import models

# Create your models here.
class Category(models.Model):
    category_name=models.CharField(max_length=200 ,unique=True)
    category_created=models.DateTimeField( auto_now_add=True)

    def __str__(self) :
        return self.category_name

class BlogPost(models.Model):
    post_title=models.CharField(max_length=255)
    post_description=models.TextField()
    post_created=models.DateTimeField( auto_now_add=True ,null=True)
    post_image=models.FileField( null=True)
    Category=models.ForeignKey(Category , on_delete=models.CASCADE ,null=True)

    def __str__(self) :
        return  self.post_title


