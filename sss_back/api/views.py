from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt


from .models import *
from api.serializers import *
import json

@csrf_exempt
def getAllFoods(request):
    if request.method == 'GET':
        foods = Food.objects.all()
        foodsSer = FoodSerializer(foods, many=True)
        return JsonResponse(foodsSer.data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        food = Food.objects.create(
            name = data.get('name', ''),
            cost = data.get('cost',''),
            resepts = data.get('resepts',''),
            imageURL = data.get('imageURL','')
            )
        serializer = FoodSerializer(food, many = False)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def food_by_id(request, food_id):

    try:
        food = Food.objects.get(id = food_id)
    except:
        return JsonResponse({'error': "Don't find id" })


    if request.method =='GET':
        foodSer = FoodSerializer(food, many = False)
        return JsonResponse(foodSer.data, safe=False)
    
    elif request.method == 'PUT':
        data = json.loads(request.body)
        print(data)
        name = data.get('name', '')
        cost = data.get('cost','')
        resepts = data.get('resepts','')
        imageURL = data.get('imageURL','')

        food.name = name
        food.cost = cost
        food.resepts = resepts
        food.imageURL = imageURL

        food.save()

        foodSer = FoodSerializer(food, many = False)

        return JsonResponse(foodSer.data, safe=False)
    

    elif request.method == 'DELETE':
        food.delete()
        return JsonResponse({'delete': True})

class Shops(APIView):
    def get(self, request):
        shop = Shop.objects.all()
        shopSer = ShopSerializer(shop, many = True)
        return Response(shopSer.data)
    def post(self, request):
        data = json.loads(request.body)
        shop = Shop.objects.create(
            name = data.get('name', ''),
            description = data.get('description',''),
            cost = data.get('cost',''),
            imageURL = data.get('imageURL','')
            )
        serializer = ShopSerializer(shop, many = False)
        return JsonResponse(serializer.data, safe=False)
    
class ShopById(APIView):

    def get(self, request, shop_id):
        try:
            shop = Shop.objects.get(id = shop_id)
        except Shop.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        serialazer = ShopSerializer(shop, many = False)
        return JsonResponse(serialazer.data, safe=False)
    
    def delete(self, request, shop_id):
        try:
            shop = Shop.objects.get(id = shop_id)
        except Shop.DoesNotExist as e:
            return JsonResponse({"error": str(e)})
        
        shop.delete()
        return JsonResponse({"delete": "succesful"})
    
    def put(self, request, shop_id):
        try:
            shop = Shop.objects.get(id = shop_id)
        except Shop.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        data = json.loads(request.body)

        name = data.get('name', '')
        description = data.get('description','')
        cost = data.get('cost','')
        imageURL = data.get('imageURL','')

        shop.name = name
        shop.description = description
        shop.cost = cost
        shop.imageURL = imageURL


        shop.save()

        serializer = ShopSerializer(shop, many=False)

        return JsonResponse(serializer.data)
    
class Books(APIView):
    def get(self, request):
        book = Book.objects.all()
        bookSer = BookSerializer(book, many = True)
        return JsonResponse(bookSer.data, safe=False)
    def post(self, request):
        data = json.loads(request.body)
        book = Book.objects.create(
            title = data.get('title', ''),
            author = data.get('author',''),
            description = data.get('description',''),
            imageURL = data.get('imageURL','')
            )
        serializer = BookSerializer(book, many = False)
        return JsonResponse(serializer.data)