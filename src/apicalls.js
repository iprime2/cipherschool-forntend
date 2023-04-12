import axios from 'axios'
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from './context/authContext/AuthActions'

export const login = async (user, dispatch) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + 'auth/login',
      user
    )
    dispatch(loginSuccess(res.data))
    console.log(res)
  } catch (error) {
    dispatch(loginFailure())
  }
}
