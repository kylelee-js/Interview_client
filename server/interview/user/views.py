from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from user.serializers import RegisterSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse



# Create your views here.
class RegisterView(APIView):
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        return JsonResponse({
            'user': serializer.data,
        })
        
        
class LoginView(APIView):
    
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        
        token = RefreshToken.for_user(serializer.validated_data['user'])
        refresh = str(token)
        access = str(token.access_token)

        res = JsonResponse({
            'user': str(serializer.validated_data['user']),
            'access': access
        })
        
        res.set_cookie('refresh', refresh, httponly=True)

        return res
    
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        try:
            refresh_token = request.data["refresh"]
            RefreshToken(refresh_token)
            res = Response({'logout': 'success'}, status=status.HTTP_205_RESET_CONTENT)
            res.delete_cookie('refresh')
            return res
        
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)