import datetime
import operator
from datetime import timedelta

from django.db.models.functions import ExtractDay, ExtractMonth, ExtractYear, Cast, TruncDate, TruncMonth, TruncWeek, \
    TruncDay
from django.utils import timezone
from django.utils.datetime_safe import date
from django.db.models import Avg, Sum, Min, Max, Count, DateTimeField

from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework .permissions import AllowAny

from dashboard.api.v1.serializers import QuoteSerializer, SmileSerializer, SmileExerciseSerializer, \
    SmileCommunitySerializer, SmileScienceSerializer
from dashboard.models import Quote, Smile, SmileExercise, SmileCommunity, SmileScience


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
        if days == '0':
            today = date.today()
            queryset_today = queryset.filter(created__date=today)
            try:
                output = {
                    "today_avg_smile": round(queryset_today.aggregate(Avg('second')).get("second__avg"), 2),
                    'today_min_smile': queryset_today.aggregate(Min('second')).get("second__min"),
                    'today_max_smile': queryset_today.aggregate(Max('second')).get("second__max"),
                    'today_total_smile_count': queryset_today.count(),
                    'today_total_smile_count_sum': queryset_today.aggregate(Sum('second')).get('second__sum'),
                }
            except:
                output = {"today_avg_smile": 0.0, "today_min_smile": 0.0, "today_max_smile": 0.0,
                          'today_smile_count': queryset_today.count()}
            return Response(output, status=status.HTTP_200_OK)

        if days:
            seven_day = date.today() - timedelta(days=int(days))
            year = date.today().year
            queryset = queryset.filter(created__gte=seven_day, created__year=year)
            b = queryset.values('created__date').annotate(total=Sum('second')).order_by('-total').first()
            q = queryset
            count = int(days)
            streak = 0
            latest_streak = 0
            today = date.today()
            date_today = today - timedelta(days=count)
            streak_list = []
            for i in range(0, int(days) + 1):
                if q.filter(created__date=date_today):
                    streak += 1
                else:
                    streak_list.append(streak)
                    latest_streak = streak
                    streak = 0
                count -= 1
                date_today = today - timedelta(days=count)
            # streak_list.append(streak)
            max_streak = max(streak_list)
            try:
                output = {
                    "avg_smile": round(queryset.aggregate(Avg('second')).get("second__avg"), 2),
                    'min_smile': queryset.aggregate(Min('second')).get("second__min"),
                    'max_smile': queryset.aggregate(Max('second')).get("second__max"),
                    'smile_count': queryset.count(),
                    'smile_count_sum': queryset.aggregate(Sum('second')).get('second__sum'),
                    'best_day': b,
                    'latest_Streak': latest_streak,
                    'max_streak': max_streak,


                }
            except:
                output = {"avg_smile": 0.0, "min_smile": 0.0, "max_smile": 0.0,
                          'smile_count': queryset.count()}
            return Response(output, status=status.HTTP_200_OK)
        else:
            today = date.today()
            queryset_dashboard = queryset.filter(created__date__lte=today)
            a = queryset.values('created__date').annotate(total=Sum('second'))
            b = a.order_by('-total').first()
            try:
                output = {
                    'dashboard_smile_count': queryset_dashboard.count(),
                    'dashboard_smile_count_sum': queryset_dashboard.aggregate(Sum('second')).get("second__sum"),
                    'best_day': b,
                }
            except:
                output = {"dashboard_smile_count": 0.0, 'dashboard_smile_count_sum': queryset_dashboard.count()}
            return Response(output, status=status.HTTP_200_OK)


class SmileExerciseViewSet(ModelViewSet):
    serializer_class = SmileExerciseSerializer
    queryset = SmileExercise.objects.filter(is_active=True)


class SmileCommunityViewSet(ModelViewSet):
    serializer_class = SmileCommunitySerializer
    queryset = SmileCommunity.objects.all()


class SmileScienceViewSet(ModelViewSet):
    serializer_class = SmileScienceSerializer
    queryset = SmileScience.objects.all()