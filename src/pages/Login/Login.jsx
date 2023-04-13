import './login.scss'
import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../apicalls'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginSchema } from '../../schema'
import CircularProgress from '@mui/material/CircularProgress'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isFetching, dispatch, user } = useContext(AuthContext)
  const [passwordType, setPasswordType] = useState('password')

  const onSubmit = (values, action) => {
    action.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit,
  })

  const handleLogin = (e) => {
    e.preventDefault()
    login({ email, password }, dispatch)
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

        <form className='loginLevelThree'>
          <div className='loginLevelThreeInputItem'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              name='email'
              placeholder='E-mail ID'
              className='loginLevelThreeInput'
              value={email}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className='inputError'>{formik.errors.email}</span>
          ) : null}
          <div
            className='loginLevelThreeInputItem'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={passwordType}
              name='password'
              placeholder='Password'
              className='loginLevelThreeInput'
              value={password}
              onBlur={formik.handleBlur}
            />
            <RemoveRedEyeOutlinedIcon
              className='loginShowIcon'
              onClick={() =>
                passwordType === 'password'
                  ? setPasswordType('text')
                  : setPasswordType('password')
              }
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className='inputError'>{formik.errors.password}</span>
          ) : null}
        </form>

        <div className='loginLevelFour'>
          <span className='forgetPasswordText'>Forgot Password ?</span>
          <button
            className='loginBtn'
            onClick={handleLogin}
            disabled={isFetching}
            type='submit'
          >
            {isFetching ? <CircularProgress /> : 'Signin'}
          </button>
          <div className='registerText'>
            <span className='loginDontText'>Don't have account ?</span>
            <Link to='/register' style={{ textDecoration: 'none' }}>
              <span className='loginStartedText'>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
