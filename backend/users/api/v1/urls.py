from django.urls import path, include
from rest_auth.views import LogoutView, PasswordChangeView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from users.api.v1.viewsets import (
    SignupViewSet,
    JWTLoginViewSet,
    UserProfileViewSet
)

router = DefaultRouter()
router.register("token/signup", SignupViewSet, basename="signup")
router.register("user_profile", UserProfileViewSet, basename="user_profile")

urlpatterns = [
    path("", include(router.urls)),
    path('token/login/', JWTLoginViewSet.as_view(), name='token_obtain_pair'),
    path('token/logout/', LogoutView.as_view(), name='rest_logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('forgot-password/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('password/change/', PasswordChangeView.as_view(), name='rest_password_change'),
]