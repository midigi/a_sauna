from werkzeug.security import generate_password_hash
from app.models import db, Project


# Adds a demo user, you can add other users here if you want
def seed_projects():

    p1 = Project(projectName='Demo Project', ownerId=1, taskId=1,
              teamName='Demolition')

    db.session.add(p1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_projects():
    db.session.execute('TRUNCATE projects CASCADE;')
    db.session.commit()
