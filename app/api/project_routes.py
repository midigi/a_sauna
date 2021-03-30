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


@project_routes.route("/edit/<projectId>", methods=["POST"])
@login_required
def edit_project(projectId):
    project = Project.query.get(projectId)
    json_data = request.get_json()
    print(json_data)

    if json_data["colorEdit"]:
        project.color = json_data["colorEdit"]
        print(json_data["colorEdit"])

    if json_data["updatedProjectName"]:
        project.projectName = json_data["updatedProjectName"]
        print(json_data["updatedProjectName"])

    if json_data["updatedTeamName"]:
        project.teamName = json_data["updatedTeamName"]
        print(json_data["updatedTeamName"])

    db.session.add(project)
    db.session.commit()

    return project.to_dict()


@project_routes.route("/delete/<projectId>", methods=["DELETE"])
@login_required
def delete_project(projectId):
    project = Project.query.get(projectId)

    db.session.delete(project)
    db.session.commit()

    return project.to_dict()
