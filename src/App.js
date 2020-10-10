import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // bem naming convention (from App to app)
    <div className="app">
      <h2>Discord Clone</h2>
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
    </div>
  );
}

export default App;
