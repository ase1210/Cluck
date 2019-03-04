import React from 'react';
import ChannelsIndexContainer from '../channels_index/channels_index_container';

class JoinChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchChatrooms();
  }

  handleInput(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Browse Channels</h2>
        <input type="text" placeholder='Search channels' onChange={this.handleInput} />
        <ChannelsIndexContainer search={this.state.search} />
      </div>
    )
  }
}

export default JoinChannelForm;