from django.shortcuts import render ,redirect
from .views import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from .forms import *
from django.contrib.auth.decorators import login_required
# Create your views here.

def index(request):
     return render(request,'users/mainpage.html')

#Register and login page 

def register_user(request):
          if request.method=='POST':
               form=UserRegistrationForm(request.POST)
               if form.is_valid():
                    form.save()
                    return redirect('/')
               else:
                    return render(request,'users/Register.html',{'forms':form})
                    
          context={
               'forms':UserRegistrationForm
          }
          return render(request,'Users/Register.html',context)


def login_form(request):

     if request.method=='POST':
          loginform=LoginForm(request.POST)
          if loginform.is_valid():
               data=loginform.cleaned_data
               User=authenticate(request,username=data['username'],password=data['password'])
               if User is not None:
                    login(request,User)
                    if User.is_staff:
                         return redirect('/admin/dashboard')
                    else:
                         return redirect('post/')
                    
                     
               else:
                    return render(request,'Users/Login.html',{'forms':loginform})    
     context={
          'forms':LoginForm
     }
     return render(request,'users/login.html',context)
     

#logout

def logout_form(request):
     logout(request)
     return redirect('/')


#recreating user registration form 

# def reg_form(request):
#      if request.method=='post':
#           registration=UserCreationForm(request.post)
#           if registration.is_valid():
#                registration.save()
#                return redirect('/')
#           else:
#                return render(request,'url' ,{'form':registration})

#      context={
#           'form':UserCreationForm
#      }
#      return render(request,'url',context)

 