from django.shortcuts import render
from rest_framework import generics
from .models import CustomUser
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
# Create your views here.



class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer