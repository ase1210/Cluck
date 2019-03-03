import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SignedIn = ({ logout, currentUser }) => (
  <nav className='navbar-logged-in'>
    <p>{currentUser.username}</p>
    <p onClick={logout}>Logout</p>
  </nav>
)

class SignedOut extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = '/signup';
    this.props.history.push(path);
  }

  render() {
    return (
      <nav className='navbar'>
        <section className='nav-left-align'>
          <div>
            <Link to='/' ><img className='logo' src='/images/cluck-logo.png' alt="cluck-logo" /></Link>
          </div>
          <div>Why Cluck?</div>
          <div>Solutions</div>
          <div>Resources</div>
          <div>Pricing</div>
        </section>
        <section className='nav-right-align'>
          <div><Link to='/login'>Sign in</Link></div>
          <button className="get-started" onClick={this.routeChange}>Get Started</button>
        </section>
      </nav>
    )
  }
}

const NavBar = (props) => (
  <>
    {props.currentUser ?
      <SignedIn currentUser={props.currentUser} logout={props.logout} /> :
      <SignedOut history={props.history} />
    }
  </>
)

export default withRouter(NavBar);