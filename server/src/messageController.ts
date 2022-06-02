import { Message } from "./messageModel";
import { io } from "./index";
import formatMessage from "./formatMessage";

export const sendMessageAndStoreToDB = async (message: {
  username: string;
  text: string;
}) => {
  let newMessage = new Message(formatMessage(message.username, message.text));
  await newMessage.save();
  let allMessages = await Message.find();
  io.emit("message", allMessages);
};

export const sendToFrontendAllMessages = async () => {
  let allMessages = await Message.find();
  io.emit("message", allMessages);
};
