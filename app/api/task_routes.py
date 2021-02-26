from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Task, db
from app.forms import TaskForm

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')
@login_required
def tasks():
    tasks = Task.query.filter_by(assigneeId=current_user.id)
    print(tasks)
    return {"tasks": [task.to_dict() for task in tasks]}


@task_routes.route('/<id>')
def task(id):
    tasks = Task.query.filter_by(dueDate=id).all()
    return {"tasks": [task.to_dict() for task in tasks]}


@task_routes.route('/', methods=['POST'])
@login_required
def create_task():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Task()
        form.populate_obj(data)
        data.assigneeId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return('Invalid Info')


@task_routes.route('/', methods=['DELETE'])
def delete_task():
    # tasks = Task.query.filter_by(dueDate=id).all()
    # return {"tasks": [task.to_dict() for task in tasks]}
    print('hit')
    return
