import React from 'react';
import ChannelsIndex from '../channels_index/channels_index';

class JoinChannelForm extends React.Component {

  componentDidMount() {
    this.props.fetchChatrooms();
  }

  render() {
    return (
      <div>
        <h2>Browse Channels</h2>
        <input type="text" placeholder='Search channels' value="" />
        <ChannelsIndex />
      </div>
    )
  }
}

export default JoinChannelForm;