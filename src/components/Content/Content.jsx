import './content.scss'

import React, { useContext, useEffect, useRef, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import EditIcon from '@mui/icons-material/Edit'
import PasswordModal from '../PasswordModal/PasswordModal'
import InterestsModal from '../InterestsModal/InterestsModal'
import axios from 'axios'
import { AuthContext } from '../../context/authContext/AuthContext'
import useUpdateDetails from '../../Hooks/useUpdateDetails'

const Content = () => {
  const { user } = useContext(AuthContext)
  const [userDetails, setUserDetails] = useState({
    userId: user._id || null,
  })
  const [aboutEdit, setAboutEdit] = useState(false)
  const [linksEdit, setLinksEdit] = useState(false)
  const [infoEdit, setInfoEdit] = useState(false)
  const [passwordModal, setPasswordModal] = useState(false)
  const [interestsModal, setInterestsModal] = useState(false)

  const [data, updateDetails, error, loading, msg] = useUpdateDetails(
    userDetails,
    user.accessToken,
    user._id
  )

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + 'details/' + user._id,
          {
            headers: {
              token: 'bearer ' + user.accessToken,
            },
          }
        )
        console.log(res)
        setUserDetails(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getDetails()
  }, [user])

  const handleUserDetails = () => {
    updateDetails()
    setAboutEdit(!aboutEdit)
  }

  console.log(userDetails)

  const togglePasswordModal = () => {
    setPasswordModal(!passwordModal)
  }

  const toggleInterestsModal = () => {
    setInterestsModal(!interestsModal)
  }

  const saveAbout = (e) => {
    e.preventDefault()
    setAboutEdit(!aboutEdit)
  }

  const handleLinksInputs = (e) => {
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    setUserDetails((prev) => ({ ...prev, [name]: value }))
    console.log(userDetails)
  }

  return (
    <div className='content'>
      <div className='contentItem'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>ABOUT ME</span>

          {aboutEdit ? (
            <button className='contentItemEditBtn' onClick={handleUserDetails}>
              Save
            </button>
          ) : (
            <button
              className='contentItemEditBtn'
              onClick={() => setAboutEdit(!aboutEdit)}
            >
              Edit
            </button>
          )}
        </div>
        <div className='contentItemBottom'>
          <textarea
            value={userDetails?.aboutMe}
            onChange={handleLinksInputs}
            className='contentItemInput'
            placeholder='Add something about you.'
            disabled={!aboutEdit}
            name='aboutMe'
          >
            {userDetails?.aboutMe}
          </textarea>
        </div>
      </div>
      <div className='contentDivider'></div>
      <div className='contentItem'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>CIPHER MAP</span>
        </div>
        <div className='contentItemBottom'>
          <textarea
            className='contentItemInput'
            placeholder='Add something about you.'
          ></textarea>
        </div>
        <div className='contentItemLast'>
          <span>Less</span>
          <div className='contentItemLastOne'></div>
          <div className='contentItemLastTwo'></div>
          <div className='contentItemLastThree'></div>
          <div className='contentItemLastFour'></div>
          <div className='contentItemLastFive'></div>
          <span>More</span>
        </div>
      </div>
      <div className='contentDivider'></div>
      <div className='contentItem'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>ON THE WEB</span>
          <button
            className='contentItemEditBtn'
            onClick={() => setLinksEdit(!linksEdit)}
          >
            {linksEdit ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className='contentItemBottomLink'>
          <div className='linksItems'>
            <span className='linksTitle'>Linkedin</span>
            <div className='linkInputWrapper'>
              <LinkedInIcon className='inputIcon' />
              <input
                value={userDetails?.linkedinLink}
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Linkedin'
                name='linkedinLink'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Github</span>
            <div className='linkInputWrapper'>
              <GitHubIcon className='inputIcon' />
              <input
                value={userDetails?.githubLink}
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Github'
                name='githubLink'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Facebook</span>
            <div className='linkInputWrapper'>
              <FacebookIcon className='inputIcon' />
              <input
                value={userDetails?.facebookLink}
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Faceboook'
                name='facebookLink'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Twitter</span>
            <div className='linkInputWrapper'>
              <TwitterIcon className='inputIcon' />
              <input
                value={userDetails?.twitterLink}
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Twitter'
                name='twitterLink'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Instagram</span>
            <div className='linkInputWrapper'>
              <InstagramIcon className='inputIcon' />
              <input
                value={userDetails?.instagramLink}
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Instagram'
                name='instagramLink'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Website</span>
            <div className='linkInputWrapper'>
              <LanguageIcon className='inputIcon' />
              <input
                value={userDetails?.websiteLink}
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Website'
                name='websiteLink'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
        </div>
      </div>
      <div className='contentDivider'></div>
      <div className='contentItem'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>PROFESSIONAL INFORMATION ME</span>
          <button
            className='contentItemEditBtn'
            onClick={() => {
              setInfoEdit(!infoEdit)
            }}
          >
            {infoEdit ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className='contentItemBottomPro'>
          <div className='linksItemsPro'>
            <div className='linkItemProWrapper'>
              <span className='linksTitle'>Highest education</span>
              <select
                value={userDetails?.education}
                className='linksOption'
                onChange={handleLinksInputs}
                disabled={!infoEdit}
              >
                <option value='Primary' name='education'>
                  Primary
                </option>
                <option value='Secondary' name='education'>
                  Secondary
                </option>
                <option value='High Secondary' name='education'>
                  High Secondary
                </option>
                <option value='Graduation' name='education'>
                  Graduation
                </option>
                <option value='Post Graduation' name='education'>
                  Post Graduation
                </option>
              </select>
            </div>
          </div>
          <div className='linksItemsPro'>
            <div className='linkItemProWrapper'>
              <span className='linksTitle'>What do you currently?</span>
              <select
                value={userDetails?.currently}
                className='linksOption'
                onChange={handleLinksInputs}
                disabled={!infoEdit}
              >
                <option value='Schooling' name='currently'>
                  Schooling
                </option>
                <option value='Graduation' name='currently'>
                  College Student
                </option>
                <option value='Teaching' name='currently'>
                  Teaching
                </option>
                <option value='Job' name='currently'>
                  Job
                </option>
                <option value='Freelancing' name='currently'>
                  Freelancing
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='contentDivider'></div>
      {passwordModal && (
        <PasswordModal togglePasswordModal={togglePasswordModal} />
      )}
      <div className='contentItemPass'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>PASSWORD & SECURITY</span>
          <button className='contentItemEditBtn' onClick={togglePasswordModal}>
            Change
          </button>
        </div>
        <div className='contentItemBottomPass'>
          <span className='passTitle'>PASSWORD</span>
          <input
            className='passInput'
            type='password'
            placeholder='**********'
            disabled
          ></input>
        </div>
      </div>
      <div className='contentDivider'></div>
      {interestsModal && (
        <InterestsModal toggleInterestsModal={toggleInterestsModal} />
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
          <div className='interestItem'>App Development</div>
          <div className='interestItem'>Game Development</div>
          <div className='interestItem'>Programming</div>
        </div>
      </div>
    </div>
  )
}

export default Content
