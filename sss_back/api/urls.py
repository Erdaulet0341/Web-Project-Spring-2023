from django.urls import path, include
from api import views

urlpatterns = [
    path('products/', views.getAllProducts),
    path('categories/', views.Categories.as_view()),
]