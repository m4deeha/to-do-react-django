# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.todo_list, name='todo-list'),
    path('todos/<int:pk>/', views.todo_detail, name='todo-detail'),
    path("complete_todo/", views.complete_todo, name="complete_todo")
]
