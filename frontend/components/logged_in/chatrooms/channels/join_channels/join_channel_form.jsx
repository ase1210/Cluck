import React from 'react';
import ChannelsIndexContainer from '../channels_index/channels_index_container';

const JoinChannelForm = (props) => (
  <div>
    <h2>Browse Channels</h2>
    <input type="text" placeholder='Search channels' value="" />
    <ChannelsIndexContainer />
  </div>
)

export default JoinChannelForm;