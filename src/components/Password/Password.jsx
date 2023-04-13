import React, { useState } from 'react'
import PasswordModal from '../PasswordModal/PasswordModal'

const Password = () => {
  const [passwordModal, setPasswordModal] = useState(false)

  const togglePasswordModal = () => {
    setPasswordModal(!passwordModal)
  }

  return (
    <>
      {passwordModal && (
        <PasswordModal togglePasswordModal={togglePasswordModal} />
      )}
      <div className='contentItemPass'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>PASSWORD & SECURITY</span>
          <button className='contentItemEditBtn' onClick={togglePasswordModal}>
            Change
          </button>
        </div>
        <div className='contentItemBottomPass'>
          <span className='passTitle'>PASSWORD</span>
          <input
            className='passInput'
            type='password'
            placeholder='**********'
            disabled
          ></input>
        </div>
      </div>
    </>
  )
}

export default Password
