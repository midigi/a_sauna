from flask import Blueprint
from flask_login import login_required
from app.models import Task, db

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')
@login_required
def tasks():
    tasks = Task.query.all()
    return {"tasks": [task.to_dict() for task in tasks]}
