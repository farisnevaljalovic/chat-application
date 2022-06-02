import { User } from "./userModel";

let users: { id: string; username: string }[] = [];

// Add user in users array
export const addUser = async (id: string, username: string) => {
  users = await User.find();

  // Find users with the same name
  const findUser = users.find((user) => user.username === username);
  if (findUser) {
    return false;
  }

  // Add new username in users array
  const user = { id, username };
  users.push(user);
  return true;
};

export const disconnectUser = (id: string) => {
  const filterUsers = users.filter((user) => user.id !== id);
  users = filterUsers;
};

// Get all users in chat
export const getAllUsers = async () => {
  const activeUsers = await User.find({ status: true });
  return activeUsers;
};
