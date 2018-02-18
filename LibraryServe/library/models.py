from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Book(models.Model):

    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    version = models.CharField(max_length=200)
    code = models.CharField(max_length=200)
    image = models.ImageField()

    def __str__(self):
        return self.title
    pass

class Profile(models.Model):

    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=200)
    image = models.ImageField()
    registration = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    pass

class Location(models.Model):

    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.book + " - " + self.user + " - " + self.date
    pass