import React from 'react';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChatrooms();
  }
  render() {
    return (
      <>
        <p>Sidebar</p>
      </>
    )
  }
}

export default Sidebar;