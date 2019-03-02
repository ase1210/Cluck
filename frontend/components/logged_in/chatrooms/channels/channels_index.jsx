import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ChannelsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchChatrooms();
  }
  render() {
    return (
      <h1>channelindex</h1>
    )
  }
}


export default ChannelsIndex;