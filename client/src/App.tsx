import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
// import io from "socket.io-client";
import socketIOClient from "socket.io-client";

// port for server
const PORT = "http://localhost:8000";
const socket = socketIOClient(PORT);


function App() {
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([] as { username: string, text: string, time:string }[]);
  const [connectedUsers, setConnectedUsers] = useState([] as { id: string; username: string;}[]);
  
  const getName = (name: string) => {
    setUsername(name);
    socket.emit('join-chat', name);
    setConnected(true);
  }
  const sendMessage = (mess:string) => {
    setMessage(mess);
  }
  useEffect(() => {
    if(username !== '') {
      socket.on('message', (message: { username: string, text: string, time: string }) => {
        if (message.text !== '') {
          setMessages(messages=>[...messages, message])
        }
      });
      socket.on('get-connected-users', (connectedUsers: { id: string; username: string; }[]) => {
        setConnectedUsers(connectedUsers.filter(user => user.username !== username));
      });
    }
  }, [username]) 
  useEffect(() => {
    socket.emit('user-message', { text: message, username });
  }, [message]);

  
   
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={connected ? <Navigate replace to="/chat" /> : <Login getName={getName} />} />
          <Route path={'/chat'} element={!connected ? <Navigate replace to="/" /> : <Dashboard username={username} messages={messages} connectedUsers={connectedUsers} sendMessage={sendMessage}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
