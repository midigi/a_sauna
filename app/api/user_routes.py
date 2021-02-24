from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from flask import Flask, render_template, request, redirect
from werkzeug.utils import secure_filename

from ..helpers import *

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# UPLOAD_FOLDER = '/api/users/update/profile'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@user_routes.route('/update/profile', methods=['POST'])
@login_required
def update_profile():

    if "user_file" not in request.files:
        print("1")
        return "No user_file key in request.files"

    file = request.files["user_file"]

    if file.filename == "":
        print("2")
        return "Please select a file"

    if file and allowed_file(file.filename):
        print("3")
        file.filename = secure_filename(file.filename)
        output = upload_file_to_s3(file, "S3_BUCKET")
        return str(output)

    else:
        print("4")
        return redirect("/")
