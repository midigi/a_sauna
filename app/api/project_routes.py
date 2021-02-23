from flask import Blueprint
from flask_login import login_required
from app.models import Project, db

project_routes = Blueprint('projects', __name__)


# @login_required
@project_routes.route('/')
def projects():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}