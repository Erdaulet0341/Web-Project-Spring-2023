from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=0)
    resepts = models.TextField()
    imageURL = models.TextField()

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=200)
    description = models.TextField(default="")
    imageURL = models.TextField(default="")

    def __str__(self) -> str:
        return f'id = {self.id}, title = {self.title}'


class Shop(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="")
    cost = models.IntegerField(default=0)
    imageURL = models.TextField(default="")