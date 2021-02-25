from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class ProjectForm(FlaskForm):
    projectName = StringField("projectName", validators=[DataRequired()])
    teamName = StringField("teamName", validators=[DataRequired()])
    submit = SubmitField("Submit")
