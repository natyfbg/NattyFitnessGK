from flask import Flask
from flask_cors import CORS
from workouts import workouts_bp  # Import the workouts Blueprint

# Initialize Flask app
application = Flask(__name__)

# Enable CORS for all routes
CORS(application)

# Register the workouts blueprint
application.register_blueprint(workouts_bp)

# Home route
@application.route("/")
def home():
    return "Backend is working!"

# Run the app
if __name__ == "__main__":
    application.run(debug=True)
