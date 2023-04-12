import './login.scss'
import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../apicalls'
import axios from 'axios'
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from '../../context/authContext/AuthActions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    //login({ email, password }, dispatch)
    dispatch(loginStart())
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + 'auth/login',
        { email, password }
      )
      dispatch(loginSuccess(res.data))
      console.log(res)
    } catch (error) {
      dispatch(loginFailure())
    }
  }

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLevelOne'>
          <span className='loginSignInTitle'>Signin</span>
          <CloseIcon className='loginCloseIcon' />
        </div>

        <div className='loginLevelTwo'>
          <div className='loginLevelTwoLogo'>
            <img
              className='loginLevelTwoImg'
              src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png'
              alt=''
            />
            <span className='loginLevelTwoHeader'>CipherSchool</span>
          </div>
          <span className='loginLevelTwoWelcome'>Hey, Welcome!</span>
          <span className='loginLevelTwoSigin'>
            Please provide your email and password to signin
          </span>
        </div>

        <div className='loginLevelThree'>
          <div className='loginLevelThreeInputItem'>
            <input
              onChange={(e) => setEmail(e.target.email)}
              type='text'
              name='email'
              placeholder='E-mail ID'
              className='loginLevelThreeInput'
            />
          </div>
          <div
            className='loginLevelThreeInputItem'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <input
              onChange={(e) => setPassword(e.target.email)}
              type='password'
              name='password'
              placeholder='Password'
              className='loginLevelThreeInput'
            />
            <RemoveRedEyeOutlinedIcon className='loginShowIcon' />
          </div>
        </div>

        <div className='loginLevelFour'>
          <span className='forgetPasswordText'>Forgot Password ?</span>
          <button
            className='loginBtn'
            onClick={handleLogin}
            disabled={isFetching}
          >
            Signin
          </button>
          <div className='registerText'>
            <span className='loginDontText'>Don't have account ?</span>
            <span className='loginStartedText'>Get Started</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
