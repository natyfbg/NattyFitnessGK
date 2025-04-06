from flask import jsonify
from . import workouts_bp
from .data import workouts  # ← Import the data here

@workouts_bp.route("/api/workouts", methods=["GET"])
def get_workouts():
    return jsonify(workouts)
