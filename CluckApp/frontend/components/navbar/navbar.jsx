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
      <span><img src='https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=50' alt="cluck-logo" /></span>
      <span>Why Cluck?</span>
      <span>Solutions</span>
      <span>Resources</span>
      <span>Pricing</span>
    </section>
    <section className='nav-right-align'>
      <Link to='/login'>Sign In</Link>
      <Link to='/signup'>Get Started</Link>
    </section>
  </>
)

const NavBar = (props) => (
  <nav>
    {props.currentUser ?
      <SignedIn currentUser={props.currentUser} logout={props.logout} /> :
      <SignedOut />
    }
  </nav>
)

export default NavBar;