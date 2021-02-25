from flask import Blueprint
from flask_login import login_required
from app.models import Task, db
# from app.forms import Task_form

task_routes = Blueprint('tasks', __name__)


# @login_required
@task_routes.route('/')
def tasks():
    tasks = Task.query.all()
    return {"tasks": [task.to_dict() for task in tasks]}


@task_routes.route('/<id>')
def task(id):
    tasks = Task.query.filter_by(dueDate=id).all()
    return {"tasks": [task.to_dict() for task in tasks]}

# TODO we need to set up the task form before we can continue
# @task_routes.route('/task', methods=['POST'])
# @login_required
# def create_task():
#     form = Task_form()
#     if form.validate_on_submit():
#         data = Task()
#         form.populate_obj(data)
#         db.session.add(data)
#         db.session.commit()
#         return redirect('/')
#     return('Invalid Info')
