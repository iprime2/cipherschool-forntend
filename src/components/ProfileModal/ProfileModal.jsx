import './profileModal.scss'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'

const ProfileModal = ({ toggleProfileModal }) => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  })

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

  return (
    <div className='profileModal'>
      <div className='profileModalWrapper'>
        <span className='profileModalTitle'>Profile Updater</span>
        <div className='profileModalMain'>
          <div className='profileModalMainLeft'>
            <img
              src='https://lh3.googleusercontent.com/a/AGNmyxbXs5E1xOWvRPr3HIFkBd-HXvFvm0QBgrHf-fK-Wg=s96-c'
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
        <div className='profileModalButtons'>
          <button
            className='profileModalBtnCancel'
            onClick={toggleProfileModal}
          >
            Cancel
          </button>
          <button className='profileModalBtn'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
