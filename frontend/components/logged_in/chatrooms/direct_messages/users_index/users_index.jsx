import React from 'react';
import { withRouter } from 'react-router-dom';
import UserIndexItem from './user_index_item';

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
          {this.props.users.map(user =>
            <div className='dmf-ubc-user'>
              <UserIndexItem key={user.id} user={user} />
            </div>
          )}
        </div>
      </>
    )
  }
}


export default withRouter(UsersIndex);