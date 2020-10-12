import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import {useSelector} from "react-redux";
import {selectUser} from './features/userSlice';
import Login from "./Login";

function App() {
    const user = useSelector(selectUser);
  return (
    // bem naming convention (from App to app)
    <div className="app">
        {user ? ( // check for login
            // if logged in, render app
            <>
            <Sidebar />
            <Chat />
            </>
        ) : (
            // else, ask for login
            <Login/>
        )}
    </div>
  );
}

export default App;
