import './profileModal.scss'
import React, { useContext, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { AuthContext } from '../../context/authContext/AuthContext'
import noAvatar from '../../images/noAvatar.png'
import useUpdateUser from '../../Hooks/useUpdateUser'
import axios from 'axios'

const ProfileModal = ({ toggleProfileModal }) => {
  const { user } = useContext(AuthContext)
  const [profileData, setProfileData] = useState({})
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState()

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

  useEffect(() => {
    const handleProfilePic = async () => {
      if (file) {
        const fileData = new FormData()
        const fileName = user.firstName + '.jpg'
        setFileName(fileName)
        profileData.profilePicture = fileName
        fileData.append('name', fileName)
        fileData.append('file', file)

        try {
          const res = await axios.post(
            process.env.REACT_APP_API_URL + 'upload',
            fileData
          )
          console.log(res)
        } catch (error) {
          console.log(error)
        }
      }

      updateUser()
    }

    handleProfilePic()
  }, [file])

  const profilePic = (e) => {
    setFile(e.target.files[0])
  }

  const handleProfileChange = (e) => {
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
    //window.location.reload()
  }

  console.log(profileData)

  return (
    <div className='profileModal'>
      <div className='profileModalWrapper'>
        <span className='profileModalTitle'>Profile Updater</span>
        <div className='profileModalMain'>
          <div className='profileModalMainLeft'>
            <img
              src={
                user?.profilePicture
                  ? process.env.REACT_APP_ASSETS_URL + user.profilePicture
                  : process.env.REACT_APP_ASSETS_URL + 'noAvatar.png'
              }
              alt=''
              className='profileModalImg'
            />

            <label htmlFor='file' className='profileModalIcon'>
              <EditIcon htmlFor='file' />
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                accept='.png,.jepg,.jpg'
                onChange={profilePic}
              />
            </label>
          </div>
          <div className='profileModalMainRight'>
            <div className='profileModalItems'>
              <div className='profileModalItem'>
                <span className='profileModalTitle'>First Name</span>
                <div className='profileModalInputWrapper'>
                  <input
                    onChange={handleProfileChange}
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
                    onChange={handleProfileChange}
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
                    onChange={handleProfileChange}
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
                    onChange={handleProfileChange}
                    type='number'
                    name='mobileNumber'
                    className='profileModalInput'
                    placeholder='Mobile Number (optional)'
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
