import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import io from "socket.io-client";

// port for server
const PORT = "http://localhost:8000";

function App() {
  const socket = io(PORT);
  const [connected, setConnected] = useState(false);
  const [name, setName] = useState('');

  const getName = (name:string) => {
    setName(name);
    if (name !== '') {
      setConnected(true);
    }
  }
  
  useEffect(() => {
    if (socket) {
     console.log('radi');
     
   }
  }, [socket]);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={connected ? <Navigate replace to="/chat" /> : <Login getName={getName} />} />
          <Route path={'/chat'} element={!connected ? <Navigate replace to="/" /> : <Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* {!connected && <Login getName={getName} />}
      {connected && <Dashboard />} */}
    </div>
  );
}

export default App;
