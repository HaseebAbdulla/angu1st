from django.shortcuts import render

# Create your views here.
def python(request):
    return render(request,"sqr.html")

def home(request):
    return render(request,"sqr.html")
