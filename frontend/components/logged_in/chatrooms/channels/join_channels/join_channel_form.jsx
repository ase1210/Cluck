import React from 'react';
import ChannelsIndexContainer from '../channels_index/channels_index_container';

class JoinChannelForm extends React.Component {

  componentDidMount() {
    this.props.fetchChatrooms();
  }

  render() {
    return (
      <div>
        <h2>Browse Channels</h2>
        <input type="text" placeholder='Search channels' />
        <ChannelsIndexContainer />
      </div>
    )
  }
}

export default JoinChannelForm;