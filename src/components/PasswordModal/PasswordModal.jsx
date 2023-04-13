import './passwordModal.scss'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import useChangePassword from '../../Hooks/useChangePassword'

const PasswordModal = ({ togglePasswordModal }) => {
  const { user } = useContext(AuthContext)
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    newConfirmPassword: '',
  })
  const [passwordType, setPasswordType] = useState('password')

  const [data, changePassword, error, loading] = useChangePassword(
    password,
    user.accessToken,
    user._id
  )

  const handlePassword = () => {
    changePassword()
  }

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
                type={passwordType}
                name='currentPassword'
                className='passwordModalInput'
                placeholder='Current Password'
              />
              <RemoveRedEyeOutlinedIcon
                className='passwordMOdalIcon'
                onClick={() =>
                  passwordType === 'password'
                    ? setPasswordType('text')
                    : setPasswordType('password')
                }
              />
            </div>
          </div>
          <div className='passwordModalItem'>
            <span className='passwordModalTitle'>New Password</span>
            <div className='passwordModalInputWrapper'>
              <input
                onChange={handlePasswordChange}
                type={passwordType}
                name='newPassword'
                className='passwordModalInput'
                placeholder='New Password'
              />
              <RemoveRedEyeOutlinedIcon
                className='passwordMOdalIcon'
                onClick={() =>
                  passwordType === 'password'
                    ? setPasswordType('text')
                    : setPasswordType('password')
                }
              />
            </div>
          </div>
          <div className='passwordModalItem'>
            <span className='passwordModalTitle'>Confirm Password</span>
            <div className='passwordModalInputWrapper'>
              <input
                onChange={handlePasswordChange}
                type={passwordType}
                name='newConfirmPassword'
                className='passwordModalInput'
                placeholder='Confirm Password'
              />
              <RemoveRedEyeOutlinedIcon
                className='passwordMOdalIcon'
                onClick={() =>
                  passwordType === 'password'
                    ? setPasswordType('text')
                    : setPasswordType('password')
                }
              />
            </div>
          </div>
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {data && <span style={{ color: 'green' }}>{data}</span>}
        <div className='testing'>
          <div className='passwordModalButtons'>
            <button
              className='passwordModalBtnCancel'
              onClick={togglePasswordModal}
            >
              Cancel
            </button>
            <button className='passwordModalBtn' onClick={handlePassword}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordModal
