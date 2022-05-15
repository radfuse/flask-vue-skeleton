from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '..', '.env'))

# General Config
DEBUG = True
FLASK_APP = 'app.py'
FLASK_ENV = 'development'
SECRET_KEY = environ.get('SECRET_KEY')

# Database
SQLALCHEMY_DATABASE_URI = environ.get('SQLALCHEMY_DATABASE_URI')
SQLALCHEMY_ECHO = False
SQLALCHEMY_TRACK_MODIFICATIONS = False