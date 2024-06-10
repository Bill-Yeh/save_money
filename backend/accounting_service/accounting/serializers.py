from rest_framework import serializers
from .models import FinanceRecord


class FinanceRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinanceRecord
        fields = ['id', 'type', 'date', 'category', 'amount', 'description']
