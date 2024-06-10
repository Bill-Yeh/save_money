from django.shortcuts import render

from rest_framework import generics
from .models import FinanceRecord
from .serializers import FinanceRecordSerializer


class FinanceRecordListCreateView(generics.ListCreateAPIView):
    queryset = FinanceRecord.objects.all()
    serializer_class = FinanceRecordSerializer


class FinanceRecordDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FinanceRecord.objects.all()
    serializer_class = FinanceRecordSerializer
