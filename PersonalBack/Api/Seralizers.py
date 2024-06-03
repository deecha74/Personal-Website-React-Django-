from rest_framework import serializers
from Blogs.models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=BlogPost
        fields= '__all__'

