const express = require("express");
import { Server, Socket } from "socket.io";
const http = require("http");
const cors = require("cors");

// Require router
const router = require("./router");

// Require functions for user
const { addUser, disconnectUser, getAllUsers } = require('./user');

// Require message format
const formatMessage = require("./formatMessage");

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
    // Message when clien and server connect
    console.log("We have now socket.io connection");
    
    socket.on('join-chat', (username: string) => { 
        
        const user = addUser(socket.id, username);
         
        // Welcome current user
        socket.emit('message', formatMessage(ADMIN, `Welcome to ${CHAT}`));

        // Broadcast when a user connects
        socket.broadcast.emit('message', formatMessage(ADMIN, `${username} has joined the chat`));
        
        io.emit('get-connected-users', getAllUsers());
    });

    // get user message
    socket.on('user-message', (message: { text: string, username: string }) => {        
        io.emit('message', formatMessage(message.username, message.text));  
    });

    // Message when user disconnect
    socket.on('disconnect', () => {
        const user = disconnectUser(socket.id);
        if (user) {
            io.emit('message', formatMessage(ADMIN, `${user.username} has left the chat`));
        }
    })

});

app.use(router);

// Listen for reques on PORT = 8000
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
