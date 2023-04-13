import { useState } from 'react'
import axios from 'axios'

const useUpdateDetails = (detailsData, accessToken, userId) => {
  const [updateData, setUpdateData] = useState(null)
  const [updateMsg, setUpdateMsg] = useState(null)
  const [updateError, setUpdateError] = useState(null)
  const [updateLoading, setUpdateLoading] = useState(false)

  const updateDetails = async () => {
    setUpdateLoading(true)
    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + 'details/' + userId,
        detailsData,
        {
          headers: {
            token: 'Bearer ' + accessToken,
          },
        }
      )
      console.log(res.data)
      setUpdateMsg(res.data.msg)
      setUpdateData(res.data.updateUser)
    } catch (error) {
      setUpdateError(error?.response?.data)
      console.log(error)
    }
    setUpdateLoading(false)
  }

  return [updateData, updateDetails, updateError, updateLoading, updateMsg]
}

export default useUpdateDetails
