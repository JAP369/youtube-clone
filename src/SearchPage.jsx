import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
        channel='JAP369'
        verified
        subs='111'
        noOfVideos={963}
        description='great tutorials on the planet'
      />
      <hr />
      <VideoRow
        views='1.1M'
        subs='3M'
        description='Support our fellow progrmmers'
        timestamp='12 minutes ago'
        channel='JAP369'
        image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        title='The World of Web Developers'
      />
      <VideoRow
        views='1.1M'
        subs='3M'
        description='Support our fellow progrmmers'
        timestamp='12 minutes ago'
        channel='JAP369'
        image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        title='The World of Web Developers'
      />
      <VideoRow
        views='1.1M'
        subs='3M'
        description='Support our fellow progrmmers'
        timestamp='12 minutes ago'
        channel='JAP369'
        image='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        title='The World of Web Developers'
      />
    </div>
  );
}

export default SearchPage;
