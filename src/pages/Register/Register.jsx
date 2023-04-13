import './register.scss'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { useFormik } from 'formik'
import { signupSchema } from '../../schema'
import { Link } from 'react-router-dom'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
}

const Register = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        action.resetForm()
      },
    })

  const [passwordType, setPasswordType] = useState('password')

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
        <form className='registerLevelThree' onSubmit={handleSubmit}>
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleChange}
              type='text'
              name='firstName'
              placeholder='First Name'
              className='registerLevelThreeInput'
              value={values.firstName}
              onBlur={handleBlur}
            />
          </div>
          {errors.firstName && touched.firstName ? (
            <span className='inputError'>{errors.firstName}</span>
          ) : null}
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleChange}
              type='text'
              name='lastName'
              placeholder='Last Name'
              className='registerLevelThreeInput'
              value={values.lastName}
              onBlur={handleBlur}
            />
          </div>
          {errors.lastName && touched.lastName ? (
            <span className='inputError'>{errors.lastName}</span>
          ) : null}
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleChange}
              type='text'
              name='email'
              placeholder='Email Address'
              className='registerLevelThreeInput'
              value={values.email}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email ? (
            <span className='inputError'>{errors.email}</span>
          ) : null}
          <div className='registerLevelThreeInputItem'>
            <input
              onChange={handleChange}
              type='text'
              name='phone'
              placeholder='Phone (Optional)'
              className='registerLevelThreeInput'
              value={values.phone}
              onBlur={handleBlur}
            />
          </div>
          {errors.phone && touched.phone ? (
            <span className='inputError'>{errors.phone}</span>
          ) : null}
          <div
            className='registerLevelThreeInputItem'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <input
              onChange={handleChange}
              type={passwordType}
              name='password'
              placeholder='Password'
              className='registerLevelThreeInput'
              value={values.password}
              onBlur={handleBlur}
            />
            <RemoveRedEyeOutlinedIcon
              className='registerShowIcon'
              onClick={() =>
                passwordType === 'password'
                  ? setPasswordType('text')
                  : setPasswordType('password')
              }
            />
          </div>
          {errors.password && touched.password ? (
            <span className='inputError'>{errors.password}</span>
          ) : null}
        </form>
        <div className='registerLevelFour'>
          <button className='registerBtn'>Sign up</button>
          <div className='registerText'>
            <span className='registerDontText'>Already have an account?</span>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span className='registerStartedText'>Sign in Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
