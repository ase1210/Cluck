import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {
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
      <div className='parent'>
        <div className='hero-container'>
          <main className='main-splash'>
            <h1 className='title'>Imagine what you'll accomplish together</h1>
            <section className='hero1'>
              <img src="/images/cluck-hero-img.jpg" alt='splash-image' />
              <figcaption>Molly Moon creates a recipe for success with Cluck</figcaption>
            </section>
            <p>Cluck is a collaboration hub for friends, no matter what friends you have. It's a place where conversations happen, decisions are made, and information is always at your fingertips. With Cluck, your friends are better connected.</p>
            <div>
              <button className="get-started" onClick={this.routeChange}>GET STARTED</button>
              <div>
                <section>Already using Cluck? <Link to='/login'>Sign in</Link></section>
              </div>
            </div>
            <img className='hero2' src="/images/cluck-hero-2.jpg" alt='splash-image' />
            <img className='hero3' src="/images/cluck-hero-3.jpg" alt='splash-image' />
          </main>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);