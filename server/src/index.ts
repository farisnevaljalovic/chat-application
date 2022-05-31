const express = require("express");
import { Server, Socket } from "socket.io";
const http = require("http");
const cors = require("cors");

// Require router
const router = require("./router");

// Require functions for user
const { addUser, disconnectUser, getAllUsers } = require('./user');

// Require random name generator
const randomName = require('./randomName');

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

// admin name and chat name
let ADMIN = 'Admin';
let CHAT = 'Group chat';

// Run when clien connect
io.on('connection', (socket: Socket) => {
    socket.join(CHAT);

    // Message when clien and server connect
    console.log("We have now socket.io connection");

    // Get random username 
    socket.on('handle-connection', (username: string) => {
        
        if (addUser(socket.id, username)) {
            socket.emit('user-connected');
            io.to(CHAT).emit('get-connected-users', getAllUsers());
        }   
    });
    socket.on('message', (message: { message: string, username: string }) => {
        socket.broadcast.emit('receive-message', message);
    })

    // Message when user disconnect
    socket.on('disconnect', () => {
        disconnectUser(socket.id);
    })
    
});

app.use(router);

// Listen for reques on PORT = 8000
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
