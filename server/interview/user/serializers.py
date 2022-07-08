from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'passwordChecker', 'name', 'nickname', 'image', 'department')
        
    
    password = serializers.CharField(
        help_text='비밀번호',
        write_only=True,
        required=True,
        validators = [validate_password]
    )
    
    passwordChecker = serializers.CharField(
        help_text='비밀번호 재입력',
        write_only=True,
        required=True,
    )

    def validate(self, data):
        if data['password'] != data['passwordChecker']:
            raise serializers.ValidationError(
                {'password': 'Password fields didn\'t match'}
            )
            
        return data
    
    def create(self, validated_data):
        del validated_data['passwordChecker']
        
        user = User.objects.create_user(
            **validated_data
        )
        
        user.set_password(validated_data['password'])
        user.save()
        
        return user
    
    
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
    
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    
    def validate(self, data):
        user = authenticate(**data)
        
        if user:
            token = RefreshToken.for_user(user)
            refresh = str(token)
            access = str(token.access_token)
            
            data = {
                'user': user,
                'refresh': refresh,
                'access': access
            }
            return data

        raise serializers.ValidationError(
            {'error': 'Unable to log in with provided credentials'}
        )
        
        
class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    
    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs