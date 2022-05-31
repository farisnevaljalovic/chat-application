import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import io from "socket.io-client";

// port for server
const PORT = "http://localhost:8000";
const socket = io(PORT);

function App() {
  const [status, setStatus] = useState(false);
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([] as { username: string, message: string }[]);
  const [connectedUsers, setConnectedUsers] = useState([] as { id: string; username: string;}[]);
  
  const getName = (name: string) => {
    if (socket) {
      socket.emit('handle-connection', name);
      setUsername(name);
    }
  }
  useEffect(() => {
    socket.on('user-connected', () => {
      setConnected(true);
    })
    socket.on('get-connected-users', (connectedUsers: { id: string; username: string; }[]) => {
      setConnectedUsers(connectedUsers.filter(user => user.username !== username));
      console.log(connectedUsers); 
    });
   

    // return () => {
    //   if (socket) {
    //     socket.disconnect();
    //   }
    //}
  }, [username])
  
  useEffect(() => {
    if (socket) {
      setMessages(prev=>[...prev,{message, username}])
      socket.emit('message', { message, username });
      setMessage("");
    }
    socket.on('receive-message', (message: { username: string, message: string }) => {
      setMessages(messages=>[...messages, message])
    })
  }, [message])
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={connected ? <Navigate replace to="/chat" /> : <Login getName={getName} />} />
          <Route path={'/chat'} element={!connected ? <Navigate replace to="/" /> : <Dashboard username={username} messages={messages} connectedUsers={connectedUsers} setMessage={setMessage}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
