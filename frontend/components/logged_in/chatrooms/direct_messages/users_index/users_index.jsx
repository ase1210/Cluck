import React from 'react';
import { withRouter } from 'react-router-dom';

class UsersIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubscribedClick = this.handleSubscribedClick.bind(this);
  //   this.handleAvailableClick = this.handleAvailableClick.bind(this);
  // }

  // handleAvailableClick(id) {
  //   return () => {
  //     let chatroomUser = {
  //       user_id: this.props.currentUser,
  //       chatroom_id: `${id}`,
  //       status: "active"
  //     };
  //     if (this.props.userChatroomIds.includes(id)) {
  //       this.props.updateChatroomUser(chatroomUser).then(
  //         this.props.history.push(`/messages/${id}`));
  //     } else {
  //       this.props.createChatroomUser(chatroomUser).then(
  //         this.props.history.push(`/messages/${id}`)
  //       );
  //     }
  //   };
  // }

  // handleSubscribedClick(id) {
  //   return () => {
  //     this.props.history.push(`/messages/${id}`);
  //   };
  // }

  render() {
    return (
      <>
        <div className='dmf-user-browser-container'>
          <div className='dmf-ubc-user'>
            <div className='dmf-ubc-user-image'>IMG</div>
            <div className='dmf-ubc-user-info'>
              <span>USERNAME</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default withRouter(UsersIndex);