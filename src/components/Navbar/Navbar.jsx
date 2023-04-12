import './navbar.scss'
import React from 'react'
import SortIcon from '@mui/icons-material/Sort'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Switch from '@mui/material/Switch'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <SortIcon className='menuIcon' />
        <div className='logo'>
          <img
            src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png'
            alt=''
            className='logoImg'
          />
          <span className='title'>CipherSchools</span>
        </div>

        <div className='browse'>
          <ExploreOutlinedIcon className='browseIcon' />
          <span>Browse</span>
          <KeyboardArrowDownOutlinedIcon className='browseIcon' />
        </div>
      </div>
      <div className='right'>
        <div className='rightItem'>
          <div className='search'>
            <SearchIcon className='searchIcon' />
            <input
              type='text'
              className='searchInput'
              placeholder='Search and Learn'
            />
            <TuneIcon className='searchIcon' />
          </div>
        </div>
        <div className='rightItem'>
          <NotificationsIcon />
          <span className='notificationCount'>0</span>
        </div>
        <div className='rightItem'>
          <img
            src='https://lh3.googleusercontent.com/a/AGNmyxbXs5E1xOWvRPr3HIFkBd-HXvFvm0QBgrHf-fK-Wg=s96-c'
            alt='Sushil Gupta'
            className='profileImg'
          />
        </div>
        <div className='rightItem'>
          <img
            src='https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg'
            alt=''
            className='creditImg'
          />
          <span className='credit'>0</span>
        </div>
        <div className='rightItem'>
          <Switch {...label} defaultChecked />
        </div>
      </div>
    </div>
  )
}

export default Navbar
