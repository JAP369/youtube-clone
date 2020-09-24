import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          src='https://e7.pngegg.com/pngimages/82/362/png-clipart-youtube-logo-youtube-premium-logo-youtube-awards-youtube-music-youtube-text-trademark.png'
          alt='youtube logo'
          className='header__logo'
        />
      </div>
      <div className='header__input'>
        {' '}
        <input type='text' placeholder='Search' />
        <SearchIcon className='header__inputButton' />
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </div>
    </div>
  );
}

export default Header;
