from django.shortcuts import render ,redirect
from django.http import HttpResponse
from django.contrib import messages
from .models import BlogPost ,Category
from .forms import BlogForm ,CategoryForm
from django.contrib.auth.decorators import login_required
# Create your views here.

# def indexx(request):
#     return HttpResponse('This is Function App ')

def index(request):
    Blog=BlogPost.objects.all()
    context={
        'Blog':Blog
    }



    return render (request,'base.html',context)
@login_required()
def show_category(request):
    category=Category.objects.all()
    context={
        'category':category
    }
    return render (request,'blog/Showcategory.html',context)




def add_post(request):
    if request.method=='POST':
        form=BlogForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request,messages.SUCCESS,'Product Added !')
            return redirect('/post/addpost/')

        else:
            messages.add_message(request,messages.ERROR,'Failed to add !')
            return render(request,'Blog/Blogpost.html',{'forms':form})
        
        #to show add product form at first below code 
    
    context={
        'forms':BlogForm
    }
     
    return render (request,'blog/Blogpost.html',context)

def add_category(request):

    if request.method=='POST':
        category=CategoryForm(request.POST)
        if category.is_valid():
             category.save()
             messages.add_message(request,messages.SUCCESS,'Category Added ')
             return redirect('/post/addcategory')
    
        else:
            messages.add_message(request,messages.ERROR,'Failed! ')
            return render(request,'Blog/AddCategory.html',{'cforms':CategoryForm})
       
         
    context={
        'cforms':CategoryForm
    }
     
    return render(request,'Blog/AddCategory.html',context)


#to delete category 

def delete_category(request,category_id):
    category=Category.objects.get(id=category_id)
    category.delete()
    messages.add_message(request,messages.SUCCESS,'Category Deleted !')
    return redirect('/post/category')

def delete_post(request,blog_id):
    post=BlogPost.objects.get(id=blog_id)
    post.delete()
    messages.add_message(request,messages.SUCCESS,'Article Deleted !')
    return redirect('/post')


#to edit category 

def update_category(request,category_id):
    changecategory=Category.objects.get(id=category_id)
    if request.method=='POST':
        category=CategoryForm(request.POST,instance=changecategory)
        if category.is_valid():
             category.save()
             messages.add_message(request,messages.SUCCESS,'Category Updated')
             return redirect('/post/category')
    
        else:
            messages.add_message(request,messages.ERROR,'Failed! ')
            return render(request,'Blog/updateCategory.html',{'cforms':CategoryForm})
       
    context={
        'cforms':CategoryForm(instance=changecategory)

    }
    return render(request,'Blog/updatecategory.html',context)


# to update post 

def update_post(request,blog_id):
    post=BlogPost.objects.get(id=blog_id)
    if request.method=='POST':
        upost=BlogForm(request.POST,request.FILES,instance=post)
        if upost.is_valid():
            upost.save()
            messages.add_message(request,messages.SUCCESS,'Category Updated')
            return redirect('/post')
        
        else:
            messages.add_message(request,messages.ERROR,'Category Updated')
            return render(request,'blog/updatepost.html',{'forms':BlogForm})

    


    context={
        'forms':BlogForm(instance=post)
    }
    return render(request,'Blog/updatepost.html',context)
