import React from 'react'
import "./Sidebar.css";
import SidebarChannels from "./SidebarChannels";

// icons
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from "@material-ui/core/Avatar";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase";

function Sidebar() {
    const user = useSelector(selectUser); // grab logged in user
    return (
        <div className="sidebar"> {/*(start main sidebar div)*/}

            <div className="sidebar__top"> {/*(start sidebar__top div)*/}
                <h3>JJ & Friends Season 3</h3>
                <ExpandMoreIcon />
            </div> {/*(end sidebar__top div)*/}

            <div className="sidebar__channels"> {/*(start sidebar__channels div)*/}

                <div className="sidebar__channelsHeader"> {/*(start sidebar__channelsHeader div)*/}
                    <div className="sidebar__header"> {/*(start sidebar__header div)*/}
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div> {/*(end sidebar__header div)*/}
                    <AddIcon className="sidebar__addChannel" />
                </div> {/*(end sidebar__channelsHeader div)*/}

                <div className="sidebar__channelsList"> {/*(start sidebar__channelsList div)*/}
                    <SidebarChannels />
                    <SidebarChannels />
                    <SidebarChannels />
                    <SidebarChannels />
                </div> {/*(end sidebar__channelsList div)*/}
            </div> {/*(end sidebar__channels div)*/}

            <div className="sidebar__voice"> {/*(start sidebar__voice div)*/}
                <SignalCellularAltIcon
                    className="sidebar_voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo"> {/*(start sidebar__voiceInfo div)*/}
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div> {/*(end sidebar__voiceInfo div)*/}
                <div className="sidebar__voiceIcons"> {/*(start sidebar__voiceIcons div)*/}
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div> {/*(end sidebar__voiceIcons div)*/}
            </div> {/*(end sidebar__voice div)*/}

            <div className="sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substr(0,5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    {/*    icons next to profile pic: mic icon, headphones icon, cog*/}
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>

        </div> // end main sidebar div
    )
}

export default Sidebar;
