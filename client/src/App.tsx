import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import useLocalStorage from "react-hook-uselocalstorage";

// import io from "socket.io-client";
import socketIOClient from "socket.io-client";
// server port
const PORT = "http://localhost:8000";
const socket = socketIOClient(PORT);

function App() {
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(
    [] as { username: string; text: string; time: string }[]
  );
  const [connectedUsers, setConnectedUsers] = useState(
    [] as { id: string; username: string }[]
  );
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const getName = (name: string) => {
    setUsername(name);
    socket.emit("join-chat", name);
    setConnected(true);
  };

  const sendMessage = (mess: string) => {
    setMessage(mess);
  };

  useEffect(() => {
    if (message) {
      socket.emit("user-message", { text: message, username });
    }
  }, [message]);

  socket.on(
    "get-connected-users",
    (connectedUsers: { id: string; username: string }[]) => {
      setConnectedUsers(
        connectedUsers.filter((user) => user.username !== username)
      );
    }
  );

  socket.on(
    "message",
    (messagesFromDb: { username: string; text: string; time: string }[]) => {
      setMessages(messagesFromDb);
    }
  );

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              connected ? (
                <Navigate replace to="/chat" />
              ) : (
                <Login getName={getName} />
              )
            }
          />
          <Route
            path={"/chat"}
            element={
              !connected ? (
                <Navigate replace to="/" />
              ) : (
                <Dashboard
                  theme={theme}
                  setTheme={setTheme}
                  username={username}
                  messages={messages}
                  connectedUsers={connectedUsers}
                  sendMessage={sendMessage}
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
