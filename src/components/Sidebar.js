import React from 'react';
import { LinkComponent, SocialComponent } from '../utils/links';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-content'>
        <header className='d-flex justify-content-between sidebar-container'>
          <h3 className='nav-brand'>Wiki drink</h3>
          <button onClick={closeSidebar}>
            <VscArrowSmallLeft />
          </button>
        </header>
        <div className=''>
          <LinkComponent classLink='sidebar-links'/>
        </div> 
        <SocialComponent classSocial='sidebar-social' />
      </div>
      
    </aside>
  )
}

export default Sidebar
