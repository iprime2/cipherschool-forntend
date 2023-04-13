import './profile.scss'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import EditIcon from '@mui/icons-material/Edit'
import Content from '../../components/Content/Content'
import Rightbar from '../../components/Rightbar/Rightbar'
import ProfileModal from '../../components/ProfileModal/ProfileModal'
import { AuthContext } from '../../context/authContext/AuthContext'
import axios from 'axios'
import { updateUser } from '../../context/authContext/AuthActions'

const Home = () => {
  const [profileModal, setProfileModal] = useState(false)
  const { user, dispatch } = useContext(AuthContext)

  const toggleProfileModal = () => {
    setProfileModal(!profileModal)
  }

  useEffect(() => {
    const getUpdatedUser = async (req, res) => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + 'users/find/' + user._id,
          {
            headers: {
              token: 'bearer ' + user.accessToken,
            },
          }
        )
        console.log(res.data)
        dispatch(updateUser(res.data))
      } catch (error) {
        console.log(error)
      }
    }

    //getUpdatedUser()
  }, [])

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
                        user?.profilePicture
                          ? process.env.REACT_APP_ASSETS_URL +
                            user.profilePicture
                          : process.env.REACT_APP_ASSETS_URL + 'noAvatar.png'
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
