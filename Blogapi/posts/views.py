from django.shortcuts import render
from .models import *
from rest_framework import generics,permissions
from .Serializers import PostSerializer
# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer