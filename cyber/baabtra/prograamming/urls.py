from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [
    path('cyber',views.python,name="cyber" ),
     path('home',views.home,name="home" ),

]
