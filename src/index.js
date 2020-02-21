import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store';
import { Provider } from 'react-redux';
import handleSearchChange from './actions/search.js';

// set up our store and wrap our app (<App />) to pass the store down as props:

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleSearchChange('redux tutorials')(store.dispatch)
);