from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from .models import *
from api.serializers import *


@api_view(['GET'])
def getAllProducts(request):
    products = Product.objects.all()
    productsSer = ProductSerializer(products, many=True)
    return Response(productsSer.data)

class Categories(APIView):
    def get(self, request):
        categoties = Category.objects.all()
        categotiesSer = CategorySerializer(categoties, many = True)
        return Response(categotiesSer.data)