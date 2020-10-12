// @flow
import * as React from 'react';
import "./SidebarChannel.css";

function SidebarChannel({channelName}) {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel_hash">
                    #
                </span>
                {channelName}
            </h4>
        </div>
    );
}

export default SidebarChannel;