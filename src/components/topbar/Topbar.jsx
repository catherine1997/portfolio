import React from 'react';
import './topbar.scss';
import {Person, Mail} from '@material-ui/icons';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
      <div className='left'>
        <a href="intro" className='logo'>logo</a>
        <div className='itemContainer'>
        <Person claassName='icon'/>
        <span>234 855 799 350 </span>
      </div>
      <div className='itemContainer'></div>
        <Mail className='icon'/>
        <span>Cathbaha1@gmail.com</span>
      </div>
      <div className='right'>
      <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      </div>
      </div>
      </div>
      </div>
    
  )
}

export default Topbar;