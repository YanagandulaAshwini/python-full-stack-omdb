from rest_framework import serializers 
from moviesApp.models import MoviesApp


class MoviesAppSerializer(serializers.ModelSerializer):

   class Meta:
        model =MoviesApp
        fields =('id',
                 'MovieName',
                 'Actors',
                 'Director',
                 'Genre',
                 'Duration')
