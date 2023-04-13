import { useState } from 'react'
import axios from 'axios'

const useUpdateInterest = (detailsData, accessToken, userId) => {
  const [data, setData] = useState(null)
  const [msg, setMsg] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const updateInterests = async () => {
    setLoading(true)
    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + 'details/interests/' + userId,
        detailsData,
        {
          headers: {
            token: 'Bearer ' + accessToken,
          },
        }
      )
      console.log(res.data)
      setMsg(res.data.msg)
    } catch (error) {
      setError(error?.response?.data)
      console.log(error)
    }
    setLoading(false)
  }
  return [data, updateInterests, msg, error, loading]
}

export default useUpdateInterest
