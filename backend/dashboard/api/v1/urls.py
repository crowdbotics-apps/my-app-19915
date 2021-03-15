from django.urls import path, include
from rest_framework.routers import DefaultRouter

from dashboard.api.v1.viewsets import (
    QuoteViewSet,
    SmileViewSet,
    SmileExerciseViewSet,
    SmileCommunityViewSet,
    SmileScienceViewSet,

)

router = DefaultRouter()
router.register("quote", QuoteViewSet, basename="quote")
router.register("smile", SmileViewSet, basename="smile")
router.register("smile_exercise", SmileExerciseViewSet, basename="smile_exercise")
router.register("smile_community", SmileCommunityViewSet, basename="smile_community")
router.register("smile_science", SmileScienceViewSet, basename="smile_science")

urlpatterns = [
    path("", include(router.urls)),
    # path('quote', QuoteViewSet.as_view(), name='quote'),

]