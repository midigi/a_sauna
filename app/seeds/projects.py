from werkzeug.security import generate_password_hash
from app.models import db, Project


# Adds a demo user, you can add other users here if you want
def seed_projects():

    proj1 = Project(projectName='First Project', ownerId=1, teamName='The bestest team')
    proj2 = Project(projectName='Second Project', ownerId=1, teamName='The bestest team')

    db.session.add(proj1)
    db.session.add(proj2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
