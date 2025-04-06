from flask import Flask, jsonify
from flask_cors import CORS

# Initialize Flask app
application = Flask(__name__)

# Enable CORS for all routes
CORS(application)

# Home route
@application.route("/")
def home():
    return "Backend is working!"

# API route for workouts
@application.route("/api/workouts")
def get_workouts():
    workouts = [
        {"name": "Push-ups", "type": "push", "muscles": ["chest", "triceps"]},
        {"name": "Pull-ups", "type": "pull", "muscles": ["back", "biceps"]},
        {"name": "Squats", "type": "legs", "muscles": ["quads", "glutes"]}
    ]
    return jsonify(workouts)

# Run the app
if __name__ == "__main__":
    application.run(debug=True)
