import React from 'react';
import "./Message.css";
import {Avatar} from "@material-ui/core";

function Message() {
    return (
        // main div
        <div className={"message"}>
            <Avatar/>
            <div className="message__info">
                <h4>
                    jj
                    <span className="message__timestamp">timestamp</span>
                </h4>
                <p>hi good day</p>
            </div>

        </div> // main div
    )
}

export default Message;
