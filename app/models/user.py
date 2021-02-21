from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .members import members

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstName = db.Column(db.String(100), nullable = False)
  lastName = db.Column(db.String(100), nullable = False)
  email = db.Column(db.String(50), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  about = db.Column(db.String(300), nullable = True)
  photoUrl = db.Column(db.String)

  tasks = db.relationship("Task", back_populates="user")
  projects = db.relationship("Project", secondary=members, back_populates="users")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "email": self.email,
      "about": self.about,
      "photoUrl": self.photoUrl
    }
