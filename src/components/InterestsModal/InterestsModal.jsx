import './interestsModal.scss'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import React, { useEffect, useState } from 'react'

const InterestsModal = ({ toggleInterestsModal }) => {
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    newConfirmPassword: '',
  })

  const [interests, setInterests] = useState([
    { name: 'App Development', isSelected: true },
    { name: 'Web Development', isSelected: false },
    { name: 'Game Development', isSelected: false },
    { name: 'Data Structure', isSelected: true },
    { name: 'Programming', isSelected: false },
    { name: 'Machine Learning', isSelected: false },
    { name: 'Data Science', isSelected: false },
    { name: 'Others', isSelected: false },
  ])

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  useEffect(() => {}, [interests])

  const handleInterests = (name) => {
    for (let i = 0; i < interests.length; i++) {
      if (interests[i].name === name) {
        interests[i].isSelected = !interests[i].isSelected
      }
    }

    console.log(interests)
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
        <div className='interestsModalButtons'>
          <button
            className='interestsModalBtnCancel'
            onClick={toggleInterestsModal}
          >
            Cancel
          </button>
          <button className='passwordModalBtnSave'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default InterestsModal
