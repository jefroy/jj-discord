import React from 'react';
import './ChatHeader.css';

// icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
// end icons

function ChatHeader({ channelName }) {
    return (
        // bem naming convention (from ChatHeader to ChatHeader)
        <div className="chatHeader"> {/* main div */}

            <div className="chatHeader__left"> {/* chatHeader__left div */}
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div> {/* chatHeader__left div */}
            <div className="chatHeader__right"> {/* chatHeader__right div */}
                <NotificationsIcon/>
                <EditLocationIcon/>
                <PeopleAltIcon/>
            </div> {/* chatHeader__right div */}
            <div className="chatHeader__search"> {/* chatHeader__search div */}
                <input type="text" placeholder={"Search"}/>
                <SearchIcon/>
            </div> {/* chatHeader__search div */}

            <SendIcon/>
            <HelpIcon/>

        </div> // main div
    );
}

export default ChatHeader;
