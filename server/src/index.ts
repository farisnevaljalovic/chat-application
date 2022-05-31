const express = require("express");
import { Server, Socket } from "socket.io";
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
app.use(cors());

// Setup socket.io
const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Run when clien connect
io.on('connection', (socket: Socket) => {

    // Message when clien and server connect
    console.log("We have now socket.io connection");
    
    // Message to the user when login
    io.emit('message', 'Welcome to Chat group');

    // Broadcast when a user connects
    socket.broadcast.emit('message', 'A user joined the conversation');

    // Message when user disconnect
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat')
    })
    
});

app.use(router);

// Listen for reques on PORT = 8000
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
