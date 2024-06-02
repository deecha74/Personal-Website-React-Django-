from django.forms import ModelForm, fields
from .models import *

class BlogForm(ModelForm):
    class Meta:
        model=BlogPost
        fields='__all__'

class CategoryForm(ModelForm):
    class Meta:
        model=Category
        fields='__all__'