const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

// Require router
const router = require("./router");

// Server port
const PORT = 8000;

// Initializing express 
const app = express();

// Create http server
const server = http.createServer(app);

// Cors problem
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
}));

// Setup socket.io
const io = socketio(server);

app.use(router);

// Listen for reques on PORT = 8000
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
