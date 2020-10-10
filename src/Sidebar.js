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

function Sidebar() {
    return (
        <div className="sidebar"> {/*(start main sidebar div)*/}

            <div className="sidebar__top"> {/*(start sidebar__top div)*/}
                <h3>JJ</h3>
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
                <Avatar src={"https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/82552538_112295250313283_2725657113001984000_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=dgP1-15E2bMAX-QcKz9&_nc_ht=scontent.fpos3-1.fna&oh=8f14d5163cb415386bb31d9ac3ea1bdd&oe=5FA7EFF8"} />
                <div className="sidebar__profileInfo">
                    <h3>@jj</h3>
                    <p>#myId</p>
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
