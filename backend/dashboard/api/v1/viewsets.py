import operator
from datetime import timedelta

from django.db.models.functions import ExtractDay, ExtractMonth, ExtractYear
from django.utils import timezone
from django.utils.datetime_safe import date
from django.db.models import Avg, Sum, Min, Max, Count

from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from dashboard.api.v1.serializers import QuoteSerializer, SmileSerializer, SmileExerciseSerializer, \
    SmileCommunitySerializer, SmileScienceSerializer
from dashboard.models import Quote, Smile, SmileExercise, SmileCommunity, SmileScience


class QuoteViewSet(ModelViewSet):
    serializer_class = QuoteSerializer
    today = date.today()
    queryset = Quote.objects.filter(created__date=today)

    http_method_names = ["get", "post"]


class SmileViewSet(ModelViewSet):
    serializer_class = SmileSerializer

    def get_queryset(self):
        user = self.request.user

        queryset = Smile.objects.filter(user=user)
        return queryset

    def list(self, request):
        queryset = self.get_queryset()
        today = date.today()
        queryset_today = queryset.filter(created__date=today)
        seven_day = date.today() - timedelta(days=7)
        queryset_seven_day = queryset.filter(created__gte=seven_day)

        if queryset_today:
            try:
                output = {
                    "list_today": self.get_serializer(queryset_today, many=True).data,
                }
                output.update({"today_avg_smile": round(queryset_today.aggregate(Avg('second')).get("second__avg"), 2),
                               'today_min_smile': queryset_today.aggregate(Min('second')).get("second__min"),
                               'today_max_smile': queryset_today.aggregate(Max('second')).get("second__max"),
                               'today_total_smile_count': queryset_today.count(),
                               'today_total_smile_count_sum': queryset_today.aggregate(Sum('second')).get('second__sum')
                })

            except:
                output = {"list_today": [], "today_average_smile": 0.0, "today_min_smile": 0.0, "today_max_smile": 0.0,
                          'today_total_smile_count': queryset.count()}

            return Response(output, status=status.HTTP_200_OK)
        return Response('No data found')

    @action(methods=['get'], detail=False, url_path='seven_day', url_name='seven_day')
    def seven_day(self, request):
        queryset = self.get_queryset()
        seven_day = date.today() - timedelta(days=7)
        queryset = queryset.filter(created__gte=seven_day)
        try:
            output = {
                "list_seven_day": self.get_serializer(queryset, many=True).data,
            }

            b = queryset.values('created__date').annotate(total=Sum('second')).order_by('-total').first()

            output.update({"seven_day_avg_smile": round(queryset.aggregate(Avg('second')).get("second__avg"), 2),
                           'seven_day_min_smile': queryset.aggregate(Min('second')).get("second__min"),
                           'seven_day_max_smile': queryset.aggregate(Max('second')).get("second__max"),
                           'seven_day_smile_count': queryset.count(),
                           'seven_day_smile_count_sum': queryset.aggregate(Sum('second')).get('second__sum'),
                           'best_day': b
                           })
        except:
            output = {"list_seven_day": [], "seven_day_average_smile": 0.0, "seven_day_min_smile": 0.0,
                      "seven_day_max_smile": 0.0, 'seven_day_count_sum': queryset.count()}

        return Response(output, status=status.HTTP_200_OK)

    @action(methods=['get'], detail=False, url_path='this_month', url_name='this_month')
    def this_month(self, request):
        queryset = self.get_queryset()
        this_month = date.today().month
        year = date.today().year
        queryset = queryset.filter(created__month=this_month, created__year=year)
        try:
            output = {
                "list_this_month": self.get_serializer(queryset, many=True).data
            }
            today_annotate = [x['n'] for x in queryset.annotate(day=ExtractDay('created'),).values('day').annotate(n=Sum('second'))]
            b = queryset.values('created__date').annotate(total=Sum('second')).order_by('-total').first()

            output.update({"monthly_avg_smile": round(queryset.aggregate(Avg('second')).get("second__avg"), 2),
                           'monthly_min_smile': queryset.aggregate(Min('second')).get("second__min"),
                           'monthly_max_smile': queryset.aggregate(Max('second')).get("second__max"),
                           'monthly_smile_count': queryset.count(),
                           'monthly_smile_count_sum': queryset.aggregate(Sum('second')).get("second__sum"),
                           # 'sum1': max(today_annotate),
                           'best_day': b
                           })
        except Exception as e:
            print(e)
            output = {"list_this_month": [], "monthly_average_smile": 0.0, "monthly_min_smile": 0.0,
                      "monthly_max_smile": 0.0, 'monthly_smile_count_sum': queryset.count()}

        return Response(output, status=status.HTTP_200_OK)

    @action(methods=['get'], detail=False, url_path='dashboard', url_name='dashboard')
    def dashboard(self, request):
        queryset = self.get_queryset()
        today = date.today()
        queryset = queryset.filter(created__date__lte=today)
        try:
            a = queryset.values('created__date').annotate(total=Sum('second'))
            b = a.order_by('-total').first()
            output = ({
                        'dashboard_smile_count': queryset.count(),
                        'dashboard_smile_count_sum': queryset.aggregate(Sum('second')).get("second__sum"),
                        'best_day': b

                           })
        except Exception as e:
            output = {"dashboard_smile_count": 0.0, 'dashboard_smile_count_sum': queryset.count()}

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