from django.urls import path, include
from api import views

urlpatterns = [
    path('foods/', views.getAllFoods),
    path('foods/<int:food_id>/', views.food_by_id),

    path('shops/', views.Shops.as_view()),
    path('shops/<int:shop_id>/', views.ShopById.as_view()),

    path('books/', views.Books.as_view()),
]