from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from dashboard.api.v1.viewsets import (
    QuoteViewSet,
    # SmileViewSet,
    SmileExerciseViewSet,
    ResourceViewSet,
    SmileResourceItemViewSet,
    SmileDashboard,
    FavoriteExerciseViewSet,
    SmileLevelViewSet,
    GoalViewSet,
    FacebookLogin,
    GoogleLogin,
    InstagramLogin

)

router = DefaultRouter()
router.register("quote", QuoteViewSet, basename="quote")
# router.register("smile", SmileViewSet, basename="smile")
router.register("smile_exercise", SmileExerciseViewSet, basename="smile_exercise")
router.register("smile_resource_item", SmileResourceItemViewSet, basename="smile_resource_item")
router.register("smile_resource", ResourceViewSet, basename="smile_resource")
router.register("smile_dashboard", SmileDashboard, basename="smile_dashboard")
router.register("smile_favorite", FavoriteExerciseViewSet, basename="smile_favorite")
router.register("smile_level", SmileLevelViewSet, basename="smile_level")
router.register("goal", GoalViewSet, basename="goal")

urlpatterns = [
    path("", include(router.urls)),
    # path('quote', QuoteViewSet.as_view(), name='quote'),
    path('login/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('login/google/', GoogleLogin.as_view(), name='google_login'),
    path('login/instagram/', InstagramLogin.as_view(), name='instagram_login'),
]