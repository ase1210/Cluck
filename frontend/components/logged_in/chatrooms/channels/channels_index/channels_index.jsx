import React from 'react';
import AvailableChannels from './available_channels';
import SubscribedChannels from './subscribed_channels';

const ChannelsIndex = (props) => (
  <>
    <AvailableChannels />
    <SubscribedChannels />
  </>
)

export default ChannelsIndex;