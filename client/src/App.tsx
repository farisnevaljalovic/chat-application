import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import io from "socket.io-client";

// port for server
const PORT = "http://localhost:8000";

function App() {
  const socket = io(PORT);
  
  useEffect(() => {
    if (socket) {
     console.log('radi');
     
   }
  }, [socket]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
