import React from 'react';
import { LinkComponent, SocialComponent } from '../utils/links';
import { VscArrowSmallLeft } from 'react-icons/vsc';

const Sidebar = () => {
  return (
    <aside className='sidebar show-sidebar'>
      <header className='d-flex justify-content-between sidebar-container'>
        <h3 className='nav-brand'>Wiki drink</h3>
        <button>
          <VscArrowSmallLeft />
        </button>
      </header>
      <div className='sidebar-container'>
        <LinkComponent classLink='sidebar-links'/>
      </div>
    </aside>
  )
}

export default Sidebar
