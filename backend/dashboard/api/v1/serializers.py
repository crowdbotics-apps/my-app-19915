from rest_framework import serializers
from dashboard.models import Quote, Smile, SmileExercise, Resource, ResourceItem, FavoriteExercise, Goal


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ['id', 'quote']


class SmileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Smile
        fields = '__all__'


class SmileExerciseSerializer(serializers.ModelSerializer):
    is_favorite = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = SmileExercise
        fields = '__all__'

    def get_is_favorite(self, obj):
        if obj.favorite and obj.favorite.filter(user=self.context.get("request").user):
            return True
        else:
            return False


class ResourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resource
        fields = "__all__"


class SmileResourceItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceItem
        fields = '__all__'


class FavoriteExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = FavoriteExercise
        fields = '__all__'


class GoalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Goal
        fields = "__all__"
