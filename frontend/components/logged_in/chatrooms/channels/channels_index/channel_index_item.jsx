import React from 'react';

const ChannelIndexItem = (props) => (
  <>
    <div className="jcf-cbc-channel-name">
      <span># {props.channel.name}</span>
    </div>
    <div className="jcf-cbc-channel-info">Created by <strong>{props.channel.admin}</strong> on {props.formatDate(props.channel.createdAt)}</div>
  </>
)

export default ChannelIndexItem;
