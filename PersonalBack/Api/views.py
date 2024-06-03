from django.shortcuts import render
from Blogs.models import *
from rest_framework import generics,permissions
from.Seralizers import PostSerializer
# Create your views here.


class PostList(generics.ListCreateAPIView):
    queryset=BlogPost.objects.all()
    serializer_class=PostSerializer
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
         serializer.save()