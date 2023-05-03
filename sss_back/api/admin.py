from django.contrib import admin
from .models import *

@admin.register(Food)
class AdminCompany(admin.ModelAdmin):
    list_display = ('id', 'name', 'cost')

@admin.register(Shop)
class AdminCompany(admin.ModelAdmin):
    list_display = ('id', 'name', 'cost')

@admin.register(Book)
class AdminCompany(admin.ModelAdmin):
    list_display = ('id', 'title', 'author')