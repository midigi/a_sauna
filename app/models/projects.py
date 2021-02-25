from .db import db
from .members import members


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    projectName = db.Column(db.String(100), nullable=False)
    ownerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    teamName = db.Column(db.String(100))
    tasks = db.relationship("Task", back_populates="project")
    users = db.relationship("User", secondary=members,
                            back_populates="projects")

    def to_dict(self):
        return {
            "id": self.id,
            "projectName": self.projectName,
            "teamName": self.teamName,
        }
