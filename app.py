from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "htn2025"
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route("/", methods=['GET'])
def home():
    return render_template("index.html")


@socketio.on("connect")
def connect():
    print("Connected!")


# TODO: add method to catch messages sent to connected user

# BONUS TODO: add method to join user to room

if __name__ == "__main__":
    socketio.run(app, debug=True)
