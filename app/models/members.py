from .db import db

members = db.Table(
    "members",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key = True
    ),
    db.Column("project_id", db.Integer, db.ForeignKey("projects.id"), primary_key = True
    )
)
