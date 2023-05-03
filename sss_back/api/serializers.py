from rest_framework import serializers
from .models import *



# ModelSerializers
class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'


# Serializers
class ShopSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    cost = serializers.IntegerField()
    imageURL = serializers.CharField()