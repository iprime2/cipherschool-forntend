import './content.scss'
import React, { useContext, useEffect, useRef, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import { AuthContext } from '../../context/authContext/AuthContext'
import useCreateDetails from '../../Hooks/useCreateDetails'
import useUpdateDetails from '../../Hooks/useUpdateDetails'
import Interests from '../Interests/Interests'
import Password from '../Password/Password'
import { loginSuccess } from '../../context/authContext/AuthActions'

const Content = () => {
  const { user, dispatch } = useContext(AuthContext)
  const [userDetails, setUserDetails] = useState({})
  const [aboutEdit, setAboutEdit] = useState(false)
  const [linksEdit, setLinksEdit] = useState(false)
  const [infoEdit, setInfoEdit] = useState(false)

  const [data, createDetails, error, loading, msg] = useCreateDetails(
    userDetails,
    user.accessToken,
    user._id
  )

  const [updateData, updateDetails, updateError, updateLoading, updateMsg] =
    useUpdateDetails(userDetails, user.accessToken, user._id)

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
        setUserDetails(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getDetails()
  }, [])

  useEffect(() => {
    setUserDetails({ userId: user._id || null })
    createDetails()
  }, [user])

  const handleUserDetails = (type) => {
    updateDetails()

    if (type === 'links') {
      setLinksEdit(!linksEdit)
    }

    if (type === 'aboutMe') {
      setAboutEdit(!aboutEdit)
    }

    if (type === 'info') {
      setInfoEdit(!infoEdit)
    }
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
  }

  return (
    <div className='content'>
      <div className='contentItem'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>ABOUT ME</span>

          {aboutEdit ? (
            <button
              className='contentItemEditBtn'
              onClick={() => handleUserDetails('aboutMe')}
            >
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

          {linksEdit ? (
            <button
              className='contentItemEditBtn'
              onClick={() => handleUserDetails('links')}
            >
              Save
            </button>
          ) : (
            <button
              className='contentItemEditBtn'
              onClick={() => setLinksEdit(!linksEdit)}
            >
              Edit
            </button>
          )}
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

          {infoEdit ? (
            <button
              className='contentItemEditBtn'
              onClick={() => handleUserDetails('info')}
            >
              Save
            </button>
          ) : (
            <button
              className='contentItemEditBtn'
              onClick={() => setInfoEdit(!infoEdit)}
            >
              Edit
            </button>
          )}
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
                name='education'
              >
                <option value='Primary'>Primary</option>
                <option value='Secondary'>Secondary</option>
                <option value='High Secondary'>High Secondary</option>
                <option value='Graduation'>Graduation</option>
                <option value='Post Graduation'>Post Graduation</option>
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
                name='currently'
              >
                <option value='Schooling'>Schooling</option>
                <option value='Graduation'>College Student</option>
                <option value='Teaching'>Teaching</option>
                <option value='Job'>Job</option>
                <option value='Freelancing'>Freelancing</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='contentDivider'></div>
      <Password />
      <div className='contentDivider'></div>

      <Interests userDetails={userDetails} />
    </div>
  )
}

export default Content
