from django.urls import path
from .views import *

urlpatterns = [
    path('',index),
    path('addpost/', add_post),
    path('addcategory/',add_category),
    path('category/',show_category),
    path('deletecategory/<int:category_id>',delete_category),
    path('deletepost/<int:blog_id>',delete_post),
    path('updatecategory/<int:category_id>',update_category),
    path('updatepost/<int:blog_id>',update_post),
    

]