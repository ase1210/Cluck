import React from 'react';
import NavBarContainer from '../../../navbar/navbar_container';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChatrooms();
  }
  render() {
    return (
      <>
        <div>
          <NavBarContainer />
        </div>
        <div>PRESENTATIONAL</div>
        <div>CHANNELS BUTTON</div>
        <div>CHANNEL NAME</div>
        <div>CHANNEL NAME</div>
        <div>CHANNEL NAME</div>
        <div>CHANNEL NAME</div>
        <div>PRESENTATIONAL</div>
        <div>ADD A CHANNEL</div>
        <div>PRESENTATIONAL</div>
        <div>DIRECT MESSAGES BUTTON +</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
      </>
    )
  }
}

export default Sidebar;