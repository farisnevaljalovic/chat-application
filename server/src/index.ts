import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { User } from "./userModel";
// Import router
import router from "./router";

// Import server port
import { PORT } from "./constants";
import "./dbConnection";

// import messages controller
import {
  sendMessageAndStoreToDB,
  sendToFrontendAllMessages,
} from "./messageController";

// Require functions for user
import { addUser, disconnectUser, getAllUsers } from "./user";

// Require message format
import formatMessage from "./formatMessage";

// Require random name generator
import randomName from "./randomName";

// Initializing express
const app = express();

// Create http server
const server = http.createServer(app);

// Cors problem
app.use(cors());

// Setup socket.io
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// admin name and chat name
let ADMIN = "Admin";
let CHAT = "Group chat";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Run when clien connect
io.on("connection", (socket: Socket) => {
  // Message when clien and server connect
  console.log("We have now socket.io connection");

  socket.on("join-chat", async (username: string) => {
    const existingUser = await User.findOne({ username: username });
    let user;
    //   @ts-ignore
    if (existingUser) {
      sendMessageAndStoreToDB(
        formatMessage(ADMIN, `Hello ${username}, welcome back.`)
      );
      let allUsers = await getAllUsers();
      io.emit("get-connected-users", allUsers);
      sendToFrontendAllMessages();
    } else {
      let newUser = new User({ username });
      newUser.save();
      user = newUser;
      sendMessageAndStoreToDB(formatMessage(ADMIN, `Welcome to ${CHAT}`));
      let allUsers = await getAllUsers();
      io.emit("get-connected-users", allUsers);
      sendMessageAndStoreToDB(
        formatMessage(ADMIN, `${username} has joined the chat`)
      );
      sendToFrontendAllMessages();
    }
  });

  // get user message
  socket.on(
    "user-message",
    async (message: { text: string; username: string }) => {
      sendMessageAndStoreToDB(message);
    }
  );

  // Message when user disconnect
  socket.on("disconnect", async (username) => {
    const user = disconnectUser(socket.id);
    await User.findOneAndUpdate({ username }, { status: false });
    // if (user) {
    //   io.emit(
    //     "message",
    //     formatMessage(ADMIN, `${user.username} has left the chat`)
    //   );
    // }
  });
});

app.use(router);

// Listen for reques on PORT = 8000
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
