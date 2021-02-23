from .db import db


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    taskTitle = db.Column(db.String(100), nullable=False)
    dueDate = db.Column(db.Date)
    priority = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=True)
    assigneeId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    projectId = db.Column(db.Integer, db.ForeignKey(
        "projects.id"), nullable=False)

    project = db.relationship("Project", back_populates="tasks")
    user = db.relationship("User", back_populates="tasks")

    def to_dict(self):
        return {
            "id": self.id,
            "taskTitle": self.taskTitle,
            "dueDate": self.dueDate,
            "priority": self.priority,
            "status": self.status,
            "description": self.description
            }
