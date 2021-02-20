from django.conf.urls import url 
from moviesApp import views 
 
urlpatterns = [ 
    url(r'^api/movies$', views.movies_list),
    url(r'^api/movies/(?P<pk>[0-9]+)$', views.movies_detail),
    url(r'^api/movies/status$', views.movies_list_status),
]