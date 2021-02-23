from werkzeug.security import generate_password_hash
from app.models import db, Task


def seed_tasks():

    t1 = Task(taskTitle='Task1', dueDate="2021-03-03", priority='High',
              status='Incomplete', description="A very important task. Needs to be done.", assigneeId=1, projectId=1)

    db.session.add(t1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_tasks():
    db.session.execute('TRUNCATE tasks CASCADE;')
    db.session.commit()
