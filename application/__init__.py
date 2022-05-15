from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate

# app instance
app = Flask(__name__)
app.config.from_pyfile('settings.py')

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

# init db
from application.models import db

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    from application import routes

    db.create_all()  # Create sql tables for our data models