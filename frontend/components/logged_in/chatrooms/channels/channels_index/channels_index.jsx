import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { withRouter } from 'react-router-dom';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubscribedClick = this.handleSubscribedClick.bind(this);
    this.handleAvailableClick = this.handleAvailableClick.bind(this);
  }

  handleAvailableClick(id) {
    return () => {
      let chatroomUser = {
        user_id: this.props.currentUser,
        chatroom_id: `${id}`,
        status: "active"
      };
      if (this.props.userChatroomIds.includes(id)) {
        this.props.updateChatroomUser(chatroomUser).then(
          this.props.history.push(`/messages/${id}`));
      } else {
        this.props.createChatroomUser(chatroomUser).then(
          this.props.history.push(`/messages/${id}`)
        );
      }
    };
  }

  handleSubscribedClick(id) {
    return () => {
      this.props.history.push(`/messages/${id}`);
    };
  }

  render() {
    return (
      <>
        {
          this.props.channels.available.length === 0 && this.props.channels.subscribed.length === 0
            ?
            <div className='jcf-no-match'>
              <span>No matches found for <strong>{`${this.props.search}`}</strong></span>
            </div>
            :
            <></>
        }
        <div className='jcf-channel-browser-container'>

          {
            this.props.channels.available.length !== 0
              ?
              <div className='jcf-cbc-section-head'>Channels you can join</div>
              :
              <></>
          }
          {this.props.channels.available.map(channel =>
            <div className='jcf-cbc-channel' key={channel.id}
              onClick={this.handleAvailableClick(channel.id)}>
              <ChannelIndexItem channel={channel} formatDate={this.props.formatDate} />
            </div>
          )}
          {
            this.props.channels.subscribed.length !== 0
              ?
              <div className='jcf-cbc-section-head'>Channels you belong to</div>
              :
              <></>
          }
          {this.props.channels.subscribed.map(channel =>
            <div className='jcf-cbc-channel' key={channel.id}
              onClick={this.handleSubscribedClick(channel.id)}>
              <ChannelIndexItem channel={channel} formatDate={this.props.formatDate} />
            </div>
          )}
        </div>
      </>
    )
  }
}


export default withRouter(ChannelsIndex);