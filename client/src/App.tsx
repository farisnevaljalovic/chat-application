import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import io from "socket.io-client";

// port for server
const PORT = "http://localhost:8000";

function App() {
  const socket = io(PORT);
  const [status, setStatus] = useState(false);
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    // send request for random name
    if (status) {
      socket.emit('get-username', status);
    }

    // get name from server
    socket.on('user-join', username => {
      setUsername(username);
      if (username !== '') {
        setConnected(true);
        setStatus(false);
      }
    })
  }, [socket, status]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={connected ? <Navigate replace to="/chat" /> : <Login setStatus={setStatus} />} />
          <Route path={'/chat'} element={!connected ? <Navigate replace to="/" /> : <Dashboard username={username}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
