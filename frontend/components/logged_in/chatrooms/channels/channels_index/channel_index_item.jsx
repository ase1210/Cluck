import React from 'react';

const ChannelIndexItem = (props) => (
  <>
    <p className="channel-name"># {props.channel.name}</p>
    <p className="channel-info">Created by {props.channel.admin} on DATE</p>
  </>
)

export default ChannelIndexItem;