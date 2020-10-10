// @flow
import * as React from 'react';
import "./SidebarChannel.css";

function SidebarChannels({id, channel}) {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel_hash">
                    #
                </span>
                YouTube
            </h4>
        </div>
    );
}

export default SidebarChannels;