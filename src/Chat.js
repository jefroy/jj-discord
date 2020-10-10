import React from 'react';
import './Chat.css';
import ChatHeader from "./ChatHeader";

function Chat() {
    return (
        // bem naming convention (from Chat to Chat)
        <div className="chat"> {/* main div */}
            <ChatHeader />
        </div>
    );
}

export default Chat;
