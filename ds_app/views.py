# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


class index(TemplateView):
    template_name = 'ds_app/index.html'
