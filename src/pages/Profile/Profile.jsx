import './profile.scss'
import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import EditIcon from '@mui/icons-material/Edit'
import Content from '../../components/Content/Content'
import Rightbar from '../../components/Rightbar/Rightbar'
import ProfileModal from '../../components/ProfileModal/ProfileModal'
import { AuthContext } from '../../context/authContext/AuthContext'
import noAvatar from '../../images/noAvatar.png'

const Home = () => {
  const [profileModal, setProfileModal] = useState(false)
  const { user } = useContext(AuthContext)

  const toggleProfileModal = () => {
    setProfileModal(!profileModal)
  }
  return (
    <div className='home'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='main'>
        <Sidebar />

        <div className='mainContainer'>
          <div className='mainHeader'>
            <div className='mainHeaderWrapper'>
              <div className='mainHeaderWrapperLeft'>
                <div className='mainHeaderWrapperLeftItem'>
                  <div className='profileImgWrapper'>
                    <img
                      src={
                        !user?.profilePicture ? user.profilePicture : noAvatar
                      }
                      alt=''
                      className='mainHeaderProfileImg'
                    />
                    <div className='editIconWrapper'>
                      <EditIcon
                        className='editIcon'
                        onClick={() => setProfileModal(!profileModal)}
                      />
                    </div>
                  </div>
                  {profileModal && (
                    <ProfileModal toggleProfileModal={toggleProfileModal} />
                  )}
                  <div className='mainHeaderWrapperLeftInfo'>
                    <span>Hello,</span>
                    <span className='profileName'>
                      {user.firstName + ' ' + user.lastName}
                    </span>
                    <span>{user.email}</span>
                  </div>
                </div>
                <div className='mainHeaderWrapperLeftItem'>
                  <span className='followers'>0 Followers</span>
                </div>
              </div>
              <div className='mainHeaderWrapperRight'></div>
            </div>
          </div>
          <div className='mainBody'>
            <Content />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
