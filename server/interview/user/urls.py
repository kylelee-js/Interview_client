from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import LoginView, LogoutView, RegisterView


urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    
    # 토큰
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
