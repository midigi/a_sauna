from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Project, db
from app.forms import ProjectForm

project_routes = Blueprint('projects', __name__)


@project_routes.route('/')
@login_required
def projects():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


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
