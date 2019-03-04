import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { withRouter } from 'react-router-dom';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubscribedClick = this.handleSubscribedClick.bind(this);
  }

  handleAvailableClick(id) {
    return () => {
      let chatroomUser = {
        user_id: this.props.currentUser,
        chatroom_id: `${id}`,
        status: "active"
      };
      this.props.createChatroomUser(chatroomUser).then(
        this.props.history.push(`/messages/${id}`)
      );
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
            <div>
              <p>No matches found for <span style={{ fontWeight: 700 }}>{`${this.props.search}`}</span></p>
            </div>
            :
            <></>
        }
        {
          this.props.channels.available.length !== 0
            ?
            <div>
              <p>Channels you can join</p>
            </div>
            :
            <></>
        }
        {this.props.channels.available.map(channel =>
          <div key={channel.id} onClick={this.handleAvailableClick(channel.id)}>
            <ChannelIndexItem channel={channel} formatDate={this.props.formatDate} />
          </div>
        )}
        {
          this.props.channels.subscribed.length !== 0
            ?
            <div>
              <p>Channels you belong to</p>
            </div>
            :
            <></>
        }
        {this.props.channels.subscribed.map(channel =>
          <div key={channel.id} onClick={this.handleSubscribedClick(channel.id)}>
            <ChannelIndexItem channel={channel} formatDate={this.props.formatDate} />
          </div>
        )}
      </>
    )
  }
}


export default withRouter(ChannelsIndex);