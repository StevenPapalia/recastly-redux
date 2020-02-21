import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {


    return searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      console.log(data);
      // dispatch(changeVideo(video));
      // dispatch(changeVideoList(videos));
    });



  };


};

export default handleVideoSearch;



// searchYouTube({YOUTUBE_API_KEY, q, max}, () => { dispatch(changeVideo(q)); dispatch(changeVideoList(q)); });
