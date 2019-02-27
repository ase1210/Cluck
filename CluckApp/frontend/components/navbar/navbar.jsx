import React from 'react';
import { Link } from 'react-router-dom';

const SignedIn = ({ logout, currentUser }) => (
  <>
    <span>{currentUser.username}</span>
    <button onClick={logout}>Logout</button>
  </>
)

const SignedOut = (props) => (
  <>
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
      <div><Link to='/signup'>Get Started</Link></div>
    </section>
  </>
)

const NavBar = (props) => (
  <nav className='navbar'>
    {props.currentUser ?
      <SignedIn currentUser={props.currentUser} logout={props.logout} /> :
      <SignedOut />
    }
  </nav>
)

export default NavBar;