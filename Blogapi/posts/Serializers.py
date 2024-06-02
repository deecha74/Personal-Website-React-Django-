#this is made to read complex data 

from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    poster=serializers.ReadOnlyField(source='poster.username')
    poster_id=serializers.ReadOnlyField(source='poster.id')
    class Meta:
        model=Post
        fields=['id','title','url','poster','poster_id','created']

