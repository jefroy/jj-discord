import React from 'react';
import './Chat.css';
import ChatHeader from "./ChatHeader";
// icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
// end icons
import Message from "./Message";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {selectChannelId, selectChannelName} from "./features/appSlice";

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    return (
        // bem naming convention (from Chat to Chat)
        <div className="chat"> {/* main div */}
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize={"large"}/>
                <form action="">
                    <input type="text" placeholder={`Message #TESTCHANNEL`}/>
                    <button className={"chat__inputButton"} type={"submit"}>Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize={"large"}/>
                    <GifIcon fontSize={"large"}/>
                    <EmojiEmotionsIcon fontSize={"large"}/>
                </div>
            </div>

        </div> // main div
    );
}

export default Chat;
