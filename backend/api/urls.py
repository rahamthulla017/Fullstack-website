from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactAPIView, JobViewSet, ServiceViewSet, TeamViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'team', TeamViewSet)

urlpatterns = [
    path('contact/', ContactAPIView.as_view(), name='contact'),
    path('', include(router.urls)),
]
