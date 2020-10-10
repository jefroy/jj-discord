import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";

function App() {
  return (
    // bem naming convention (from App to app)
    <div className="app">
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
