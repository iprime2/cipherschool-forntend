import './passwordModal.scss'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import React, { useEffect, useState } from 'react'

const PasswordModal = ({ togglePasswordModal }) => {
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    newConfirmPassword: '',
  })

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  console.log(password)

  const handlePasswordChange = (e) => {
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='passwordModal'>
      <div className='passwordModalWrapper'>
        <div className='passwordModalItems'>
          <div className='passwordModalItem'>
            <span className='passwordModalTitle'>Current Password</span>
            <div className='passwordModalInputWrapper'>
              <input
                onChange={handlePasswordChange}
                type='password'
                name='currentPassword'
                className='passwordModalInput'
                placeholder='Current Password'
              />
              <RemoveRedEyeOutlinedIcon className='passwordMOdalIcon' />
            </div>
          </div>
          <div className='passwordModalItem'>
            <span className='passwordModalTitle'>New Password</span>
            <div className='passwordModalInputWrapper'>
              <input
                onChange={handlePasswordChange}
                type='password'
                name='newPassword'
                className='passwordModalInput'
                placeholder='New Password'
              />
              <RemoveRedEyeOutlinedIcon className='passwordMOdalIcon' />
            </div>
          </div>
          <div className='passwordModalItem'>
            <span className='passwordModalTitle'>Confirm Password</span>
            <div className='passwordModalInputWrapper'>
              <input
                onChange={handlePasswordChange}
                type='password'
                name='newConfirmPassword'
                className='passwordModalInput'
                placeholder='Confirm Password'
              />
              <RemoveRedEyeOutlinedIcon className='passwordMOdalIcon' />
            </div>
          </div>
        </div>
        <div className='testing'>
          <div className='passwordModalButtons'>
            <button
              className='passwordModalBtnCancel'
              onClick={togglePasswordModal}
            >
              Cancel
            </button>
            <button className='passwordModalBtn'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordModal
