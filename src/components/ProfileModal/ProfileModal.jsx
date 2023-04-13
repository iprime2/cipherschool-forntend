import './profileModal.scss'
import React, { useContext, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { AuthContext } from '../../context/authContext/AuthContext'
import noAvatar from '../../images/noAvatar.png'
import useUpdateUser from '../../Hooks/useUpdateUser'

const ProfileModal = ({ toggleProfileModal }) => {
  const { user } = useContext(AuthContext)

  const [profileData, setProfileData] = useState({})

  const [data, updateUser, error, loading, msg] = useUpdateUser(
    profileData,
    user.accessToken,
    user._id
  )

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  const handlePasswordChange = (e) => {
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleUpdateProfile = () => {
    updateUser()
  }

  console.log(profileData)

  return (
    <div className='profileModal'>
      <div className='profileModalWrapper'>
        <span className='profileModalTitle'>Profile Updater</span>
        <div className='profileModalMain'>
          <div className='profileModalMainLeft'>
            <img
              src={user?.profilePicture ? user.profilePicture : noAvatar}
              alt=''
              className='profileModalImg'
            />
            <EditIcon className='profileModalIcon' />
          </div>
          <div className='profileModalMainRight'>
            <div className='profileModalItems'>
              <div className='profileModalItem'>
                <span className='profileModalTitle'>First Name</span>
                <div className='profileModalInputWrapper'>
                  <input
                    onChange={handlePasswordChange}
                    type='text'
                    name='firstName'
                    className='profileModalInput'
                    placeholder='Current Password'
                  />
                </div>
              </div>
              <div className='profileModalItem'>
                <span className='profileModalTitle'>Last Name</span>
                <div className='profileModalInputWrapper'>
                  <input
                    onChange={handlePasswordChange}
                    type='text'
                    name='lastName'
                    className='profileModalInput'
                    placeholder='New Password'
                  />
                </div>
              </div>
              <div className='profileModalItem'>
                <span className='profileModalTitle'>Email Address</span>
                <div className='profileModalInputWrapper'>
                  <input
                    onChange={handlePasswordChange}
                    type='text'
                    name='email'
                    className='profileModalInput'
                    placeholder='Confirm Password'
                  />
                </div>
              </div>
              <div className='profileModalItem'>
                <span className='profileModalTitle'>Mobile Number</span>
                <div className='profileModalInputWrapper'>
                  <input
                    onChange={handlePasswordChange}
                    type='number'
                    name='mobileNumber'
                    className='profileModalInput'
                    placeholder='Confirm Password'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {msg && <span style={{ color: 'green' }}>{msg}</span>}
        <div className='profileModalButtons'>
          <button
            className='profileModalBtnCancel'
            onClick={toggleProfileModal}
          >
            Cancel
          </button>
          <button className='profileModalBtn' onClick={handleUpdateProfile}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
