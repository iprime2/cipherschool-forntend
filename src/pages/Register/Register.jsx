import './register.scss'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'

const Register = () => {
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  })

  const handleRegisterInput = (e) => {
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  console.log(register)

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerLevelOne'>
          <span className='registerSignInTitle'>Signup</span>
          <CloseIcon className='registerCloseIcon' />
        </div>

        <div className='registerLevelTwo'>
          <div className='registerLevelTwoLogo'>
            <img
              className='registerLevelTwoImg'
              src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png'
              alt=''
            />
            <span className='registerLevelTwoHeader'>CipherSchool</span>
          </div>
          <span className='registerLevelTwoWelcome'>Create New Account</span>
          <span className='registerLevelTwoSigin'>
            Please provide your valid informations to signup
          </span>
        </div>

        <div className='registerLevelThree'>
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleRegisterInput}
              type='text'
              name='firstName'
              placeholder='First Name'
              className='registerLevelThreeInput'
            />
          </div>
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleRegisterInput}
              type='text'
              name='lastName'
              placeholder='Last Name'
              className='registerLevelThreeInput'
            />
          </div>
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleRegisterInput}
              type='text'
              name='email'
              placeholder='Email Address'
              className='registerLevelThreeInput'
            />
          </div>
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleRegisterInput}
              type='text'
              name='phone'
              placeholder='Phone (Optional)'
              className='registerLevelThreeInput'
            />
          </div>
          <div
            className='registerLevelThreeInputItem'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <input
              onChange={handleRegisterInput}
              type='password'
              name='password'
              placeholder='Password'
              className='registerLevelThreeInput'
            />
            <RemoveRedEyeOutlinedIcon className='registerShowIcon' />
          </div>
        </div>
        <div className='registerLevelFour'>
          <button className='registerBtn'>Signin</button>
          <div className='registerText'>
            <span className='registerDontText'>Already have an account?</span>
            <span className='registerStartedText'>Signin Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
