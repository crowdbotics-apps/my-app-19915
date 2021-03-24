from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from users.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
    UserProfileSerializers,
    CustomTokenObtainPairSerializer)
from home.models import CustomText, HomePage
from users.models import User


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    permission_classes = (AllowAny,)
    http_method_names = ["post"]


class JWTLoginViewSet(TokenObtainPairView):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""
    permission_classes = (AllowAny,)
    serializer_class = CustomTokenObtainPairSerializer


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class UserProfileViewSet(ModelViewSet):
    serializer_class = UserProfileSerializers
    http_method_names = ["get", "put", 'post']

    def get_queryset(self):
        user = self.request.user
        queryset = User.objects.all()
        return queryset