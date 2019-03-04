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
      <div className='jcf-parent'>
        <div className='join-channel-form'>
          <div className='jcf-title'>
            <h1>Browse channels</h1>
          </div>
          <div className='jcf-search'>
            <input type="text" placeholder='Search channels' onChange={this.handleInput} />
          </div>
          <div className='presentational'></div>
          <ChannelsIndexContainer search={this.state.search} />
        </div>

      </div>
    )
  }
}

export default JoinChannelForm;