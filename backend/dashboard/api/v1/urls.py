from django.urls import path, include
from rest_framework.routers import DefaultRouter

from dashboard.api.v1.viewsets import (
    QuoteViewSet,
    SmileViewSet,

)

router = DefaultRouter()
router.register("quote", QuoteViewSet, basename="quote")
router.register("smile", SmileViewSet, basename="smile")

urlpatterns = [
    path("", include(router.urls)),
    # path('quote', QuoteViewSet.as_view(), name='quote'),

]