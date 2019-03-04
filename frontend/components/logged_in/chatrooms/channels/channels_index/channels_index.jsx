import React from 'react';
import ChannelIndexItem from './channel_index_item';

const ChannelsIndex = (props) => (
  <>
    {
      props.channels.available.length === 0 && props.channels.subscribed.length === 0
        ?
        <div>
          <p>No matches found for <span style={{ fontWeight: 700 }}>{`${props.search}`}</span></p>
        </div>
        :
        <></>
    }
    {
      props.channels.available.length !== 0
        ?
        <div>
          <p>Channels you can join</p>
        </div>
        :
        <></>
    }
    {props.channels.available.map(channel =>
      <div key={channel.id} >
        <ChannelIndexItem channel={channel} formatDate={props.formatDate} />
      </div>
    )}
    {
      props.channels.subscribed.length !== 0
        ?
        <div>
          <p>Channels you belong to</p>
        </div>
        :
        <></>
    }
    {props.channels.subscribed.map(channel =>
      <div key={channel.id} >
        <ChannelIndexItem channel={channel} formatDate={props.formatDate} />
      </div>
    )}
  </>
)

export default ChannelsIndex;