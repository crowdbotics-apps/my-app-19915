from rest_framework import serializers
from dashboard.models import Quote, Smile, SmileExercise, SmileCommunity, SmileScience, FavoriteExercise


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


class SmileCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SmileCommunity
        fields = '__all__'


class SmileScienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmileScience
        fields = '__all__'


class FavoriteExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = FavoriteExercise
        fields = '__all__'
