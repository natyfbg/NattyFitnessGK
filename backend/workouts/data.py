import json
import os

# Path to workouts.json
file_path = os.path.join(os.path.dirname(__file__), 'workouts.json')

def get_workouts():
    with open(file_path, 'r') as f:
        return json.load(f)
