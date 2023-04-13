import { useState, useEffect } from 'react'
import axios from 'axios'

const useChangePassword = (password, accessToken, userId) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const changePassword = async () => {
    setLoading(true)
    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + 'users/changePassword/' + userId,
        password,
        {
          headers: {
            token: 'Bearer ' + accessToken,
          },
        }
      )
      console.log(res)
      setData(res.data)
    } catch (error) {
      setError(error?.response?.data)
      console.log(error)
    }
    setLoading(false)
  }

  return [data, changePassword, error, loading]
}

export default useChangePassword
