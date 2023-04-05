import React from 'react';
import gapicon from '../assets/Google_Apps_Icon.png';
import proficon from '../assets/profile-image-icon.PNG'

const Header = () => {
  return (
    <div className='header'>
            <a href='#'> Gmail</a>
            <a href='#'> Images</a>
            <img src={gapicon} alt="Google_Apps_Icon"></img>
            <img className='header--img2'src={proficon} alt="Google_Apps_Icon"></img>
    </div>
  )
}

export default Header;