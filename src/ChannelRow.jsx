import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ avatar, image, channel, verified, subs, noOfVideos, description }) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' alt={channel} src={image} />
      <div className='channelRow__text'>
        <h4>
          {channel}
          {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscibers • {noOfVideos} videos
          <p>{description}</p>
        </p>
      </div>
    </div>
  );
}

export default ChannelRow;
