from django.urls import path
from . import views

urlpatterns = [
    path('logs/', views.LogListAPIView.as_view()),
    path('logs/<int:pk>', views.LogDetailAPIView.as_view()),
]