import React from 'react';
import ChannelIndexItem from './channel_index_item';

const ChannelsIndex = (props) => (
  <>
    <div>
      <p>Channels you can join</p>
    </div>
    {props.channels.available.map(channel =>
      <div>
        <ChannelIndexItem key={channel.id} channel={channel} />
      </div>
    )}
    <div>
      <p>Channels you belong to</p>
    </div>
    {props.channels.subscribed.map(channel =>
      <div>
        <ChannelIndexItem key={channel.id} channel={channel} />
      </div>
    )}
  </>
)

export default ChannelsIndex;