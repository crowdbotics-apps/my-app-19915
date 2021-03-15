from rest_framework import serializers
from dashboard.models import Quote, Smile


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ['id', 'quote']


class SmileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Smile
        fields = '__all__'


