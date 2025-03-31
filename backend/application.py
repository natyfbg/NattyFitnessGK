from flask import Flask, jsonify
from flask_cors import CORS

application = Flask(__name__)
CORS(application)

@application.route("/")
def home():
    return "Backend is working!"

@application.route("/api/workouts")
def get_workouts():
    workouts = [
        {"name": "Push-ups", "type": "push", "muscles": ["chest", "triceps"]},
        {"name": "Pull-ups", "type": "pull", "muscles": ["back", "biceps"]},
        {"name": "Squats", "type": "legs", "muscles": ["quads", "glutes"]}
    ]
    return jsonify(workouts)

if __name__ == "__main__":
    application.run(debug=True)
