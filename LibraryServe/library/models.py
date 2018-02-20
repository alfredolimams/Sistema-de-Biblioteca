from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import User, UserManager
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

class Profile(AbstractBaseUser):

    #user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=200)
    image = models.ImageField()
    registration = models.CharField(max_length=200)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'phone']

    objects = UserManager()

    def __str__(self):
        return self.name



class Location(models.Model):

    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.book + " - " + self.user + " - " + self.date
    pass