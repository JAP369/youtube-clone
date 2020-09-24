import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='React Courses'
          views='6M Views'
          timestamp='1 day ago'
          channelImage='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          channel='JAP369'
          image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        />
        <VideoCard
          title='React Courses'
          views='6M Views'
          timestamp='1 day ago'
          channelImage='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          channel='JAP369'
          image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        />
        <VideoCard
          title='React Courses'
          views='6M Views'
          timestamp='1 day ago'
          channelImage='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          channel='JAP369'
          image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        />
        <VideoCard
          title='React Courses'
          views='6M Views'
          timestamp='1 day ago'
          channelImage='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          channel='JAP369'
          image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        />
        <VideoCard
          title='React Courses'
          views='6M Views'
          timestamp='1 day ago'
          channelImage='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          channel='JAP369'
          image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        />
        <VideoCard
          title='React Courses'
          views='6M Views'
          timestamp='1 day ago'
          channelImage='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          channel='JAP369'
          image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
