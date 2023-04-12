import './rightbar.scss'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import BookRigthbarIcon from '../../images/book.png'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <KeyboardArrowRightIcon className='righbarIcon' />
        <div className='righbarMenuItems'>
          <div className='rightbarMenuItem'>
            <DashboardIcon className='rightbarItemIcon' />
            <span className='rightbarItemTitle'>Dashboard</span>
          </div>
          <div className='activeRightbarMenuItem'>
            <PersonIcon className='rightbarItemIcon' />
            <span className='rightbarItemTitle'>My Profile</span>
          </div>
          <div className='rightbarMenuItem'>
            <img src={BookRigthbarIcon} alt='' className='rightbarIconImg' />
            <span className='rightbarItemTitle'>Enrolled Courses</span>
          </div>
          <div className='rightbarMenuItem'>
            <BookIcon className='rightbarItemIcon' />
            <span className='rightbarItemTitle'>Wishlist</span>
          </div>
          <div className='rightbarMenuItem'>
            <ThumbUpIcon className='rightbarItemIcon' />
            <span className='rightbarItemTitle'>Liked Videos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
