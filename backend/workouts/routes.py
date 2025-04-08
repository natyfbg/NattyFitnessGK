from flask import jsonify
from . import workouts_bp
from .data import get_workouts


@workouts_bp.route("/api/workouts", methods=["GET"])
def workouts_route():
    return jsonify(get_workouts())
