from datetime import datetime, timedelta
from MySQLdb import IntegrityError
from flask import jsonify, request
import jwt

from application import app
from application.models import db
from application.models import User
from application.auth import token_required

@app.route("/ping", methods=['GET'])
@token_required
def index(user):
    return jsonify('pong')

@app.route('/login', methods=('POST',))
def login():
    data = request.get_json()
    user = User.authenticate(**data)

    if not user:
        return jsonify({ 'message': 'Invalid credentials', 'authenticated': False }), 401

    token = jwt.encode({
            'sub': user.email,
            'iat':datetime.utcnow(),
            'exp': datetime.utcnow() + timedelta(minutes=30)
        },
        app.config['SECRET_KEY'], "HS256")
    return jsonify({ 'token': token })

@app.route('/register', methods=('POST',))
def register():
    data = request.get_json()
    user = User(**data)
    db.session.add(user)

    try:
        db.session.commit()
        return "", 201
    except Exception as e:
        print(e)
        db.session.rollback()
        return jsonify(error="Registration failed"), 500
        