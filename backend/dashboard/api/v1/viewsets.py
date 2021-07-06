import datetime
from datetime import timedelta
# from django.utils import timezone
from django.utils.datetime_safe import date
from django.db.models import Avg, Sum, Min, Max, Count
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
    SmileResourceItemSerializer, FavoriteExerciseSerializer, ResourceSerializer, GoalSerializer
from dashboard.models import Quote, Smile, SmileExercise, ResourceItem, FavoriteExercise, Resource, Goal, Streak


class QuoteViewSet(ModelViewSet):
    serializer_class = QuoteSerializer
    today = date.today()
    queryset = Quote.objects.filter(created__date=today)
    http_method_names = ["get", "post"]


class Round(Func):
  function = 'ROUND'
  arity = 2


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
                .annotate(avg_smile=Round(Avg('second'), 2)).annotate(max_smile=Max('second')).annotate(min_smile=Min('second'))
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
            s = Streak.objects.filter(user=self.request.user).values("max_streak", "latest_streak")
            m = 0
            l = 0
            if s:
                m = s[0]["max_streak"]
                l = s[0]["latest_streak"]
            max_streak = max(streak_list)
            if max_streak >= m:
                if m == 0:
                    st = Streak.objects.create(user=self.request.user, max_streak=max_streak, latest_streak=latest_streak)
                else:
                    if latest_streak > l:
                        st = Streak.objects.update(latest_streak=latest_streak)
                    st = Streak.objects.update(max_streak=max_streak)
            # else:
            #     if latest_streak > l:
            #         st = Streak.objects.update(latest_streak=latest_streak)

            try:
                output = {
                    'dashboard': day_dashboard_query,
                    'best_day': b,
                    'latest_Streak': latest_streak,
                    'max_streak': max_streak if max_streak > m else m,
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
                    'dashboard': dashboard[0] if dashboard.count() > 0 else dashboard,
                    'best_day': b,
                }
            except:
                output = {"dashboard_smile_count": 0.0, 'dashboard_smile_count_sum': queryset_dashboard.count()}
            return Response(output, status=status.HTTP_200_OK)


class SmileExerciseViewSet(ModelViewSet):
    serializer_class = SmileExerciseSerializer
    queryset = SmileExercise.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(is_active=True).prefetch_related("favorite")
        exercise = self.request.query_params.get("exercise")
        if exercise:
            queryset = queryset.filter(id=int(exercise))
        return queryset


class SmileResourceItemViewSet(ModelViewSet):
    serializer_class = SmileResourceItemSerializer

    def get_queryset(self):
        queryset = ResourceItem.objects.all()
        resource = self.request.query_params.get("resource")
        if resource:
            queryset = queryset.filter(resource=int(resource))
        return queryset


class ResourceViewSet(ModelViewSet):
    serializer_class = ResourceSerializer
    queryset = Resource.objects.all()


class FavoriteExerciseViewSet(ModelViewSet):
    serializer_class = FavoriteExerciseSerializer
    queryset = FavoriteExercise.objects.all()


class SmileLevelViewSet(ModelViewSet):
    serializer_class = SmileSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Smile.objects.filter(user=user)
        return queryset

    def list(self, request):
        queryset = self.get_queryset()
        today = date.today()
        queryset_dashboard = queryset.filter(created__date__lte=today, user=self.request.user).values('user')\
            .annotate(total_second=Sum('second'))
        total_second = 0
        if queryset_dashboard:
            total_second = queryset_dashboard[0]['total_second']
        level = 0
        if total_second <= 1800:
            l = {10: 1, 60: 2, 120: 3, 300: 4, 420: 5, 600: 6, 900: 7, 1200: 8, 1500: 9, 1800: 10}
            for i in l:
                if total_second > i:
                    continue
                else:
                    if total_second <= i:
                        if total_second == i:
                            level = l[i]
                        else:

                            level = l[i] - 1
                        break
        else:
            if total_second >= 2400:
                i = True
                level = 11
                a = 2400
                while i:
                    a = a + 600
                    if total_second >= a:
                        level = level + 1
                    else:
                        level = level
                        i = False
            else:
                level = 10
        output = {
            "level": level
        }
        return Response(output, status=status.HTTP_200_OK)


class GoalViewSet(ModelViewSet):
    serializer_class = GoalSerializer

    def get_queryset(self):
        today = date.today()
        queryset = Goal.objects.filter(user=self.request.user)
        return queryset

    def list(self, request):
        queryset = self.get_queryset()
        queryset = queryset.filter(created__gte=date.today()).values("goal_second")
        b = Smile.objects.filter(user=self.request.user, created__gte=date.today())\
            .values('created__date').annotate(total=Sum('second')).annotate(total_count=Count('second'))
        total = 0
        smile_count = 0
        goal = 0
        average = 0
        if queryset:
            goal = queryset[0]["goal_second"]

        if b:
            total = b[0]["total"]
            smile_count = b[0]["total_count"]
            goal = queryset[0]["goal_second"]
            average = total / goal * 100
        message = ""
        remaining_second = 0
        if total == goal:
            if goal == 0:
                message = "you have not define your goal"
            else:
                message = "congratulation you complete this goal"
        else:
            if total < goal:
                a = goal - total
                remaining_second = a
            else:
                average = (total / goal * 100) - ((total - goal) / goal * 100)
                message = "congratulation you complete this goal"
        output = {
            "message": message,
            "remaining_second": round(remaining_second, 2),
            "average": int(average),
            "smile_count": smile_count,
            "smile_second": total
        }
        return Response(output, status=status.HTTP_200_OK)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
    callback_url = "https://developers.google.com/oauthplayground"


class InstagramLogin(SocialLoginView):
    adapter_class = InstagramOAuth2Adapter
    client_class = OAuth2Client