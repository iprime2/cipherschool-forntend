import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
})

export const signupSchema = Yup.object({
  FirstName: Yup.string()
    .min(2)
    .max(25)
    .required('Please enter Your First Name'),
  LastName: Yup.string().min(2).max(25).required('Please enter Your Last Name'),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirm_password: Yup.string()
    .min(6)
    .required('Please enter your password')
    .oneOf([Yup.ref('password'), null], 'Password must match'),
})
