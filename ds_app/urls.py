# -*- coding: utf-8 -*-
from django.urls import path
from ds_app.views import *

app_name = 'ds_app'

urlpatterns = [
    path('', index.as_view(), name='index'),
]
