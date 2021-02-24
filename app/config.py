import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_ECHO = True


S3_BUCKET = "asauna-user-images"
S3_KEY = os.environ.get("S3_KEY")
S3_SECRET = os.environ.get("S3_SECRET")
S3_LOCATION = 'https://asauna-user-images.s3-us-east-2.amazonaws.com/'

SECRET_KEY = os.urandom(32)
DEBUG = True
PORT = 5000
