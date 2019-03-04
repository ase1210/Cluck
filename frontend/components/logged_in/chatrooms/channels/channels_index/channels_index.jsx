import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelsIndex extends React.Component {

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
          <div key={channel.id} >
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
          <div key={channel.id} >
            <ChannelIndexItem channel={channel} formatDate={this.props.formatDate} />
          </div>
        )}
      </>
    )
  }
}


export default ChannelsIndex;