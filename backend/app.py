from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # 👈 THIS LINE FIXES THE PROBLEM

@app.route("/")
def home():
    return "Flask backend is running!"

@app.route("/api/hello", methods=["GET"])
def hello():
    name = request.args.get("name", "World")
    return jsonify({
        "message": f"Hello {name}, from Flask backend!"
    })

if __name__ == "__main__":
    app.run(debug=True)
