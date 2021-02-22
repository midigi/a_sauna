from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(firstName='Demo', lastName="User", email='demo@asauna.com',
                hashed_password='password', about="A busy, busy person, who needs asauna", photoUrl="https://st.depositphotos.com/1814084/1640/i/950/depositphotos_16404909-stock-photo-brad-pitt.jpg")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
