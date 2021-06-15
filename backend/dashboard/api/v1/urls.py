from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from dashboard.api.v1.viewsets import (
    QuoteViewSet,
    # SmileViewSet,
    SmileExerciseViewSet,
    SmileCommunityViewSet,
    SmileScienceViewSet,
    SmileDashboard,
    FavoriteExerciseViewSet,
    FacebookLogin,
    GoogleLogin,
    InstagramLogin

)

router = DefaultRouter()
router.register("quote", QuoteViewSet, basename="quote")
# router.register("smile", SmileViewSet, basename="smile")
router.register("smile_exercise", SmileExerciseViewSet, basename="smile_exercise")
router.register("smile_community", SmileCommunityViewSet, basename="smile_community")
router.register("smile_science", SmileScienceViewSet, basename="smile_science")
router.register("smile_dashboard", SmileDashboard, basename="smile_dashboard")
router.register("smile_favorite", FavoriteExerciseViewSet, basename="smile_favorite")

urlpatterns = [
    path("", include(router.urls)),
    # path('quote', QuoteViewSet.as_view(), name='quote'),
    path('login/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('login/google/', GoogleLogin.as_view(), name='google_login'),
    path('login/instagram/', InstagramLogin.as_view(), name='instagram_login'),
]