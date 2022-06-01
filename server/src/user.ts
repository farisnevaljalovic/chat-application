let users: { id: string; username: string; }[] = [];

// Add user in users array
const addUser = (id: string, username: string) => {  
    
    // Find users with the same name
    const findUser = users.find((user) => user.username === username);
    if (findUser) {
        return false
    }

    // Add new username in users array
    const user = { id, username };
    users.push(user);
    return true
}

const disconnectUser = (id: string) => {
    const filterUsers = users.filter(user => user.id !== id);
    users = filterUsers
}

// Get all users in chat
const getAllUsers = () => users;


module.exports = { addUser, disconnectUser, getAllUsers };