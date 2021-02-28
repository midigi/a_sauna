from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SelectField, TextAreaField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired


class TaskForm(FlaskForm):
    taskTitle = StringField("taskTitle", validators=[DataRequired()])
    dueDate = DateField("dueDate", validators=[DataRequired()])
    priority = SelectField("priority", choices=[(
        "Low", "Low"), ("Medium", "Medium"), ("High", "High")], validators=[DataRequired()])
    status = SelectField("status", choices=[("Incomplete", "Incomplete"), ("In Progress", "In Progress"), (
        "Complete", "Complete"), ("Need Help", "Need Help")], validators=[DataRequired()])
    description = TextAreaField("description")
    projectId = IntegerField()
    submit = SubmitField("submit")
