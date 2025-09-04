let socket = io.connect("http://127.0.0.1:5000")

const onLoad = () => {
	socket.onconnect(() => {
		socket.emit("connect");
	});

	localStorage.setItem("user", self.crypto.randomUUID());
};

const sendMessage = (data) => {
	// TODO: send message to Socket.IO server
};

const changeRoom = (data) => {
	// BONUS TODO: join room for chat
};

// TODO: setup hook for receiving new messages
