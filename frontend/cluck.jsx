import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { postUser, postSession, deleteSession } from './util/session_api_util';

window.postSession = postSession;
window.deleteSession = deleteSession;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: Object.keys(window.currentUser)[0] },
      entities: { users: window.currentUser }
    };
  }
  const store = configureStore(preloadedState);
  delete window.currentUser;
  ReactDOM.render(<Root store={store} />, root)
});