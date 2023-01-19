import React from 'react'
import './navbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="wrraper">
          
          <div className="imgLogo">
            <img src="https://i.pinimg.com/564x/60/a0/6d/60a06de2cd659aac35f54af9eb03dff6.jpg" alt="" />
          </div>

          <div className="navbarLogo">
            <span className='logo'>SoussAlima</span>
          </div>

        
          <div className="items">
            <div className="item">
              <LanguageIcon className='icon' />
            </div>
            <div className="item">
              <NightsStayIcon  className='icon' />
            </div>
            <div className="item">
              <FullscreenExitIcon  className='icon' />
            </div>
            <div className="item">
              <NotificationsActiveIcon  className='icon' />
            </div>
            <div className="item">
              <ChatBubbleIcon  className='icon' />
            </div>
            <div className="item">
              <ListIcon  className='icon' />
            </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar