import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

//TODO: Import the Provider component from 'react-redux' here!
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';

//TODO: Use the Provider component to make your store available to
//  the rest of your app.
// const store = configureStore(); //optional to pass in an initial stater here

ReactDOM.render(
  <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  document.getElementById('app')
);





// set up our store and wrap our app (<App />) to pass the store down as props:

// ReactDOM.render(
//   <provider store={store}>
//     <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
//   </provider>,
//   document.getElementById('app')
// );