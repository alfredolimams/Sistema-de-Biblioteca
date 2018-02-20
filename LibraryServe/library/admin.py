from django.contrib import admin
from .models import Book, Location

# Register your models here.

classes = [Book, Location]

for c in classes:
    admin.site.register(c)
