import datetime
from datetime import timedelta
# from django.utils import timezone
from django.utils.datetime_safe import date
from django.db.models import Avg, Sum, Min, Max, Count, DateTimeField, Prefetch
from rest_framework import status
from django.db.models import Func
# from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
# from rest_framework .permissions import AllowAny

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.instagram.views import InstagramOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_auth.registration.views import SocialLoginView

from dashboard.api.v1.serializers import QuoteSerializer, SmileSerializer, SmileExerciseSerializer, \
    SmileCommunitySerializer, SmileScienceSerializer, FavoriteExerciseSerializer
from dashboard.models import Quote, Smile, SmileExercise, SmileCommunity, SmileScience, FavoriteExercise


class QuoteViewSet(ModelViewSet):
    serializer_class = QuoteSerializer
    today = date.today()
    queryset = Quote.objects.filter(created__date=today)
    http_method_names = ["get", "post"]


class SmileDashboard(ModelViewSet):
    serializer_class = SmileSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Smile.objects.filter(user=user)
        return queryset

    def list(self, request):
        queryset = self.get_queryset()
        days = self.request.query_params.get('days')
        if days:
            previous_day = date.today() - timedelta(days=int(days))
            # year = date.today().year
            # queryset = queryset.filter(created__gte=previous_day, created__year=year)
            queryset = queryset.filter(created__gte=previous_day)
            b = queryset.values('created__date').annotate(total=Sum('second')).order_by('-total').first()
            day_dashboard_query = queryset.values('user').annotate(total_second=Sum('second')).annotate(total_count=Count('second'))\
                .annotate(avg_smile=Avg('second')).annotate(max_smile=Max('second')).annotate(min_smile=Min('second'))
            q = queryset
            count = int(days)
            streak = 0
            latest_streak = 0
            today = date.today()
            previous_date = today - timedelta(days=count)
            streak_list = []
            for i in range(0, int(days) + 1):
                if q.filter(created__date=previous_date):
                    streak += 1
                else:
                    streak_list.append(streak)
                    latest_streak = streak
                    streak = 0
                count -= 1
                previous_date = today - timedelta(days=count)
            streak_list.append(streak)
            latest_streak = streak
            max_streak = max(streak_list)
            try:
                output = {
                    'dashboard': day_dashboard_query,
                    'best_day': b,
                    'latest_Streak': latest_streak,
                    'max_streak': max_streak,
                }
            except:
                output = {"avg_smile": 0.0, "min_smile": 0.0, "max_smile": 0.0,
                          'smile_count': day_dashboard_query.count()}
            return Response(output, status=status.HTTP_200_OK)
        else:
            today = date.today()
            queryset_dashboard = queryset.filter(created__date__lte=today)
            b = queryset_dashboard.values('created__date').annotate(total=Sum('second')).order_by('-total').first()
            dashboard = queryset_dashboard.values('user').annotate(total_second=Sum('second')).annotate(total_count=Count('second'))
            try:
                output = {
                    'dashboard': dashboard.first(),
                    'best_day': b,
                }
            except:
                output = {"dashboard_smile_count": 0.0, 'dashboard_smile_count_sum': queryset_dashboard.count()}
            return Response(output, status=status.HTTP_200_OK)


class SmileExerciseViewSet(ModelViewSet):
    serializer_class = SmileExerciseSerializer
    queryset = SmileExercise.objects.filter(is_active=True).prefetch_related("favorite")


class SmileCommunityViewSet(ModelViewSet):
    serializer_class = SmileCommunitySerializer
    queryset = SmileCommunity.objects.all()


class SmileScienceViewSet(ModelViewSet):
    serializer_class = SmileScienceSerializer
    queryset = SmileScience.objects.all()


class FavoriteExerciseViewSet(ModelViewSet):
    serializer_class = FavoriteExerciseSerializer
    queryset = FavoriteExercise.objects.all()


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
    callback_url = "https://developers.google.com/oauthplayground"


class InstagramLogin(SocialLoginView):
    adapter_class = InstagramOAuth2Adapter
    client_class = OAuth2Client