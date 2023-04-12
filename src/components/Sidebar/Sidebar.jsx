import './sidebar.scss'
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ExploreIcon from '@mui/icons-material/Explore'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DiscordIcon from '../../images/Untitled.png'
import BookIcon from '../../images/book.png'
import leterIcon from '../../images/letter-c.png'
import FeedbackIcon from '@mui/icons-material/Feedback'
import SignpostIcon from '@mui/icons-material/Signpost'
import LogoutIcon from '@mui/icons-material/Logout'

const Sidebar = () => {
  return (
    <div className='sidebar-closed'>
      <div className='sidebarMenu'>
        <div className='sidebarTop'>
          <div className='sidebarTopItem'>
            <HomeRoundedIcon className='sidebarIcon' />
            <span>Home</span>
          </div>
          <div className='sidebarTopItem'>
            <img src={BookIcon} alt='' className='sidebarIconImg' />
            <span>Courses</span>
          </div>
          <div className='sidebarTopItem'>
            <ExploreIcon className='sidebarIcon' />
            <span>Trending</span>
          </div>
          <div className='sidebarTopItem'>
            <PersonIcon className='sidebarIcon' />
            <span>Following</span>
          </div>
          <div className='sidebarTopItem'>
            <DashboardIcon className='sidebarIcon' />
            <span>Dashboard</span>
          </div>
          <div className='sidebarTopItem'>
            <img src={DiscordIcon} alt='' className='sidebarIconImg' />
            <span>Discord</span>
          </div>
          <div className='sidebarTopItem'>
            <img src={leterIcon} alt='' className='sidebarIconImg' />
            <span>Creator Access</span>
          </div>
          <div className='sidebarTopItem'>
            <FeedbackIcon className='sidebarIcon' />
            <span>Feedback</span>
          </div>
          <div className='sidebarTopItem'>
            <SignpostIcon className='sidebarIcon' />
            <span>Tour</span>
          </div>
        </div>
        <div className='sidebarBottom'>
          <div className='sidebarTopItem'>
            <LogoutIcon className='sidebarIcon' />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
