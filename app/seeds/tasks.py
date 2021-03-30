from werkzeug.security import generate_password_hash
from app.models import db, Task


# Adds a demo user, you can add other users here if you want
def seed_tasks():

    task1 = Task(taskTitle='First Task', dueDate='2021-04-10', priority='Low',
                 status='Incomplete', description='testing 1, 2, 3.', assigneeId=1, projectId=1)
    task2 = Task(taskTitle='Second Task', dueDate='2021-04-12', priority='Medium',
                 status='Complete', description='We did it', assigneeId=1, projectId=1)
    task3 = Task(taskTitle='Work on Project', dueDate='2021-05-12', priority='High',
                 status='Incomplete', description='Super important', assigneeId=1, projectId=2)

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
