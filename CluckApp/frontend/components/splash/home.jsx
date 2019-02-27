import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <main>
    <section>
      <h1>TITLE SECTION</h1>
    </section>
    <section>
      <img src="" alt='splash-image' />
      <aside>
        <p>DESCRIPTION TEXT AREA</p>
        <div>
          <button>GET STARTED BUTTON</button>
          <div>
            <p>Already using Cluck?</p>
            <Link to='/login'>Sign in</Link>
          </div>
        </div>
      </aside>
    </section>
  </main>
)

export default Home;