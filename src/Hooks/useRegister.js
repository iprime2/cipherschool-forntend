import { useState } from 'react'
import axios from 'axios'

const useRegister = (userData) => {
  const [data, setData] = useState(null)
  const [msg, setMsg] = useState(null)
  const [errMsg, setErrMsg] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const createUser = async () => {
    setLoading(true)
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + 'auth/register',
        userData
      )
      setMsg(res.data.msg)
    } catch (error) {
      setErrMsg('Email already exist')
      console.log(error)
    }
    setLoading(false)
  }

  return [data, createUser, error, errMsg, loading, msg]
}

export default useRegister
