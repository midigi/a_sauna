from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Project, db, User, members
from app.forms import ProjectForm

project_routes = Blueprint('projects', __name__)



@project_routes.route('/')
@login_required
def projects():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


@project_routes.route('/<projectId>')
@login_required
def user_projects(projectId):
    project = Project.query.filter_by(id=projectId).first()
    return {"projects": project.to_dict()}


@project_routes.route('/user')
@login_required
def user_project():
    userId = current_user.id
    projects = Project.query.filter_by(ownerId=userId).all()
    return {"projects": [project.to_dict() for project in projects]}


@project_routes.route('/<projectId>/members')
@login_required
def project_members(projectId):
    project = Project.query.get(projectId)
    members = project.users.all()
    return {"members": [member.to_dict() for member in members]}


@project_routes.route("/project", methods=["POST"])
@login_required
def create_project():
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Project()
        form.populate_obj(data)
        data.ownerId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return('Invalid Info')
