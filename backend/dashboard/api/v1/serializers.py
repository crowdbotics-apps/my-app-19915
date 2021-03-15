from rest_framework import serializers
from dashboard.models import Quote, Smile, SmileExercise, SmileCommunity, SmileScience


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ['id', 'quote']


class SmileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Smile
        fields = '__all__'


class SmileExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmileExercise
        fields = '__all__'


class SmileCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SmileCommunity
        fields = '__all__'

class SmileScienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmileScience
        fields = '__all__'
