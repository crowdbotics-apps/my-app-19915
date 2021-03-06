import binascii
import os
from django.contrib.auth import get_user_model, authenticate
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_auth.models import TokenModel
from rest_framework.authtoken.models import Token
# from base64.fields import Base64ImageField
from drf_extra_fields.fields import Base64ImageField

from rest_framework.response import Response
from rest_framework import serializers, exceptions, fields
from rest_auth.serializers import PasswordResetSerializer
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from home.models import CustomText, HomePage

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    # goals = fields.MultipleChoiceField(choices=User.GOALS)

    class Meta:
        model = User
        fields = (
        'id', 'name', 'email', 'password', 'age', 'gender', 'relationship_status', 'children', 'profession_status',
        'goals')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            },
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def get_token(self, validated_data):
        # where we populate the 'token' field above
        user = User.objects.filter(email=validated_data.email)
        token = Token.objects.get(user=user)
        return token.key

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            name=validated_data.get('name'),
            age=validated_data.get('age'),
            gender=validated_data.get('gender'),
            relationship_status=validated_data.get('relationship_status'),
            children=validated_data.get('children'),
            profession_status=validated_data.get('profession_status'),
            goals=validated_data.get('goals'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'

            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        token_key = Token.objects.get_or_create(user=user)

        return user

    def to_representation(self, instance):
        data = super(SignupSerializer, self).to_representation(instance)

        return {'key': instance.auth_token.key, 'user': data}

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = '__all__'


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


class CustomTokenSerializer(serializers.ModelSerializer):
    user_detail = UserSerializer(source="user", read_only=True)

    class Meta:
        model = TokenModel
        fields = ('key', "user_detail")


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    default_error_messages = {
        'no_active_account': _('EMAIL OR PASSWORD IS INVALID'),
        'pass': _('No account found'),
    }

    def validate(self, attrs):
        data = super().validate(attrs)
        authenticate_kwargs = {
            self.username_field: attrs[self.username_field],
            'password': attrs['password'],
        }
        try:
            authenticate_kwargs['request'] = self.context['request']
        except KeyError:
            pass
        username = attrs.get("username")
        user = User.objects.filter(email=username).exists()
        if not user:
            raise ValidationError({"email": "EMAIL IS NOT REGISTERED "})
        self.user = authenticate(**authenticate_kwargs)

        if self.user is None or not self.user.is_active:
            raise exceptions.AuthenticationFailed(
                self.error_messages['no_active_account'],
                'no_active_account',
            )

        if self.user:
            data = super().validate(attrs)
            data['user'] = UserSerializer(User.objects.get(id=self.user.id)).data
        return data


class UserProfileSerializers(serializers.ModelSerializer):
    goals = fields.MultipleChoiceField(choices=User.GOALS)
    image = Base64ImageField()

    class Meta:
        model = User
        fields = ['name', 'age', 'image', 'gender', 'relationship_status', 'children', 'profession_status', 'goals']


class CustomAuthTokenSerializer(serializers.Serializer):
    username = serializers.EmailField(label=_("Email"))
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'),
                                email=email, password=password)

            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "email" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
