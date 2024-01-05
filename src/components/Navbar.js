import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {LinkComponent, SocialComponent} from '../utils/links';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const {openSidebar} = useGlobalContext();
  return (
      <nav className="navbar nav">
        <div className="container">
          <Link to='/'>
            <h3 className='nav-brand'>Wiki Drink</h3>
          </Link>
          
          <div className="links-section">
          <LinkComponent classLink='nav-links'/>
          <SocialComponent classSocial='social-links'/>
          </div>
          <button className="nav-toggle" onClick={openSidebar}>
            <FaBars className='nav-icon'/>
          </button>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  