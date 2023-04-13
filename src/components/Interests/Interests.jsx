import React, { useEffect, useState } from 'react'
import InterestsModal from '../InterestsModal/InterestsModal'

const Interests = ({ userDetails, userInterests }) => {
  const [interestsModal, setInterestsModal] = useState(false)
  const [interests, setInterests] = useState([
    { name: 'App Development', isSelected: false },
    { name: 'Web Development', isSelected: false },
    { name: 'Game Development', isSelected: false },
    { name: 'Data Structure', isSelected: false },
    { name: 'Programming', isSelected: false },
    { name: 'Machine Learning', isSelected: false },
    { name: 'Data Science', isSelected: false },
    { name: 'Others', isSelected: false },
  ])

  useEffect(() => {
    if (userDetails.interests) {
      for (let i = 0; i < interests.length; ++i) {
        if (userDetails.interests.includes(interests[i].name)) {
          interests[i].isSelected = true
        }
      }
    }
  }, [userDetails])

  const toggleInterestsModal = () => {
    setInterestsModal(!interestsModal)
  }

  return (
    <>
      {interestsModal && (
        <InterestsModal
          toggleInterestsModal={toggleInterestsModal}
          userDetails={userDetails}
          interests={interests}
        />
      )}
      <div className='contentItemInterest'>
        <div className='contentItemTopInterest'>
          <span className='contentItemTitleInterest'>INTERESTS</span>
          <button
            className='contentItemEditBtnInterest'
            onClick={toggleInterestsModal}
          >
            Edit
          </button>
        </div>
        <div className='contentItemBottomInterest'>
          {userDetails.interests &&
            userDetails?.interests.map((item, index) => (
              <div className='interestItem' key={item}>
                {item}
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Interests
