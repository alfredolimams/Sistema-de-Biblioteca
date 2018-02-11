from django.contrib import admin
from .models import Book, Location, User

# Register your models here.

classes = [Book, Location, User]

for c in classes:
    admin.site.register(c)
