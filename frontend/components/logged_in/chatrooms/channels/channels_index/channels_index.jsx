import React from 'react';
import ChannelIndexItem from './channel_index_item';

const ChannelsIndex = (props) => (
  <>
    <div>
      <p>Channels you can join</p>
    </div>
    {props.channels.available.map(channel =>
      <div key={channel.id} >
        <ChannelIndexItem channel={channel} formatDate={props.formatDate} />
      </div>
    )}
    <div>
      <p>Channels you belong to</p>
    </div>
    {props.channels.subscribed.map(channel =>
      <div key={channel.id} >
        <ChannelIndexItem channel={channel} formatDate={props.formatDate} />
      </div>
    )}
  </>
)

export default ChannelsIndex;