# backend/workouts/__init__.py
from flask import Blueprint

workouts_bp = Blueprint('workouts', __name__)

from . import routes
