import React from 'react';
import glogo from '../assets/google-logo.png'

const Logo = () => {
  return (
    <div>
        <img className="logo--img" src={glogo} alt='google logo'/>
    </div>
  )
}

export default Logo