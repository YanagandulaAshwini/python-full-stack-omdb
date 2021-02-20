from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from .models import MoviesApp
from .serializers import MoviesAppSerializer
from rest_framework.decorators import api_view




@api_view(['GET', 'POST', 'DELETE'])
def movies_list(request):
    if request.method == 'GET':
        movies = MoviesApp.objects.all()
        
        MovieName= request.query_params.get('MovieName', None)
        if MovieName is not None:
            movies = movies.filter(MovieName__icontains=MovieName)
        
        movies_serializer = MoviesAppSerializer(movies, many=True)
        return JsonResponse(movies_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        movies_data = JSONParser().parse(request)
        movies_serializer = MoviesAppSerializer(data=movies_data['user'])
        if movies_serializer.is_valid():
            movies_serializer.save()
            return JsonResponse(movies_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(movies_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = MoviesApp.objects.all().delete()
        return JsonResponse({'message': '{} Movies were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def movies_detail(request, pk):
    try: 
       movies = MoviesApp.objects.get(pk=pk) 
    except MoviesApp.DoesNotExist: 
        return JsonResponse({'message': 'The movies does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        movies_serializer =MoviesAppSerializer(movies) 
        return JsonResponse(movies_serializer.data) 
 
    elif request.method == 'PUT': 
        movies_data = JSONParser().parse(request) 
        print(movies_data)
        movies_serializer = MoviesAppSerializer(movies, data=movies_data['user']) 
        if movies_serializer.is_valid(): 
            movies_serializer.save() 
            return JsonResponse(movies_serializer.data) 
        return JsonResponse(movies_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        movies.delete() 
        return JsonResponse({'message': 'movie was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
@api_view(['GET'])
def movies_list_status(request):
    movies = MoviesApp.objects.filter(status=True)
        
    if request.method == 'GET': 
        movies_serializer = MoviesAppSerializer(movies, many=True)
        return JsonResponse(movies_serializer.data, safe=False)