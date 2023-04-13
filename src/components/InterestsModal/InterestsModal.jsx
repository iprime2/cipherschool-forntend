import './interestsModal.scss'
import React, { useContext, useEffect, useState } from 'react'
import useUpdateInterest from '../../Hooks/useUpdateInterest'
import { AuthContext } from '../../context/authContext/AuthContext'

const InterestsModal = ({ interests, toggleInterestsModal, userDetails }) => {
  const { user } = useContext(AuthContext)

  const [interestsData, setInterestsData] = useState([])

  const [data, updateInterests, msg, error, loading] = useUpdateInterest(
    interestsData,
    user.accessToken,
    user._id
  )

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  const createInterestsData = () => {
    for (let i = 0; i < interests.length; ++i) {
      if (
        interests[i].isSelected === true &&
        !interestsData.includes(interests[i].name)
      ) {
        interestsData.push(interests[i].name)
      } else if (interests[i].isSelected === true) {
        interestsData.pop(interests[i].name)
      }
    }
    updateInterests()
  }

  const handleInterests = (name) => {
    for (let i = 0; i < interests.length; i++) {
      if (interests[i].name === name) {
        interests[i].isSelected = !interests[i].isSelected
      }
    }
  }

  return (
    <div className='interestsModal'>
      <div className='interestsModalWrapper'>
        <div className='interestsItems'>
          {interests.map((item) => (
            <div
              key={item.name}
              className={
                item.isSelected ? 'interestsItemSelected' : 'interestsItem'
              }
              onClick={() => handleInterests(item.name)}
            >
              <span className='interestsItemTitle'></span>
              {item.name}
            </div>
          ))}
        </div>
        {msg && <span style={{ color: 'green' }}>{msg}</span>}
        <div className='interestsModalButtons'>
          <button
            className='interestsModalBtnCancel'
            onClick={toggleInterestsModal}
          >
            Cancel
          </button>
          <button
            className='passwordModalBtnSave'
            onClick={createInterestsData}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default InterestsModal
