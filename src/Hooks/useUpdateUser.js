import { useState, useEffect } from 'react'
import axios from 'axios'

const useUpdateUser = (userData, accessToken, userId) => {
  const [data, setData] = useState(null)
  const [msg, setMsg] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const updateUser = async () => {
    setLoading(true)
    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + 'users/' + userId,
        userData,
        {
          headers: {
            token: 'Bearer ' + accessToken,
          },
        }
      )
      console.log(res.data)
      setMsg(res.data.msg)
      setData(res.data.updateUser)
    } catch (error) {
      setError(error?.response?.data)
      console.log(error)
    }
    setLoading(false)
  }

  return [data, updateUser, error, loading, msg]
}

export default useUpdateUser
