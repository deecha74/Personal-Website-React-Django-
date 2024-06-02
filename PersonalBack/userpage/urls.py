from django.urls import path 
from .views import *




urlpatterns = [
    path('',login_form),
    path('register/',register_user),
    path('logout/',logout_form),
     

]
  


 