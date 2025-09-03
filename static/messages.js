let socket = io.connect("http://127.0.0.1:5000")

const onLoad = () => {
	socket.onconnect(() => {
		socket.emit("connect");
	});

	localStorage.setItem("user", self.crypto.randomUUID());
};

const sendMessage = (data) => {
	console.log(data);
	document.getElementById("message").value = "";
	socket.emit("sendMessage", {
		"message": data,
		"room": localStorage.getItem("room"),
		"user": localStorage.getItem("user"),
	});
};

const changeRoom = (data) => {
	localStorage.setItem("room", data);
	socket.emit("changeRoom", {"name": data});
};

socket.on("receiveMessage", (data) => {
	let messageLine = document.createElement("p");
	let messageText = document.createTextNode(data.user + ": " + data.message);
	messageLine.appendChild(messageText);
	document.getElementById("chatbox").appendChild(messageLine);
});
