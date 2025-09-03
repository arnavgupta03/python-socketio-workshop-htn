from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room

app = Flask(__name__)
app.config["SECRET_KEY"] = "htn2025"
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route("/", methods=['GET'])
def home():
    return render_template("index.html")


@socketio.on("connect")
def connect():
    print("Connected!")


@socketio.on("sendMessage")
def sendMessage(data):
    print(data)
    emit("receiveMessage", {
        "message": data["message"],
        "user": data["user"]
    },
        broadcast=True)


@socketio.on("changeRoom")
def changeRoom(data):
    join_room(data["name"])


if __name__ == "__main__":
    socketio.run(app, debug=True)
