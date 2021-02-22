import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_ECHO = True


S3_BUCKET = os.environ.get("asauna-user-images")
S3_KEY = os.environ.get("AKIAIBLVQSFMM2EWIQTQ")
S3_SECRET = os.environ.get("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")
S3_LOCATION = 'http://{}.s3.amazonaws.com/'.format(S3_BUCKET)

SECRET_KEY = os.urandom(32)
DEBUG = True
PORT = 5000
