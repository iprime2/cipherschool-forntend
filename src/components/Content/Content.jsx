import './content.scss'

import React, { useRef, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import EditIcon from '@mui/icons-material/Edit'
import PasswordModal from '../PasswordModal/PasswordModal'
import InterestsModal from '../InterestsModal/InterestsModal'

const Content = () => {
  const [aboutEdit, setAboutEdit] = useState(false)
  const [linksEdit, setLinksEdit] = useState(false)
  const [infoEdit, setInfoEdit] = useState(false)
  const [passwordModal, setPasswordModal] = useState(false)
  const [interestsModal, setInterestsModal] = useState(false)

  // data
  const [about, setAbout] = useState('hello')
  const [links, setLinks] = useState({
    linkedin: '',
    github: '',
    facebook: '',
    twitter: '',
    instagram: '',
    website: '',
    education: '',
    currently: '',
    password: '',
  })

  const [interests, setInterests] = useState([])

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

    setLinks((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='content'>
      <div className='contentItem'>
        <div className='contentItemTop'>
          <span className='contentItemTitle'>ABOUT ME</span>

          <button
            className='contentItemEditBtn'
            onClick={() => setAboutEdit(!aboutEdit)}
          >
            {aboutEdit ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className='contentItemBottom'>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className='contentItemInput'
            placeholder='Add something about you.'
            disabled={!aboutEdit}
          ></textarea>
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
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Linkedin'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Github</span>
            <div className='linkInputWrapper'>
              <GitHubIcon className='inputIcon' />
              <input
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Github'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Facebook</span>
            <div className='linkInputWrapper'>
              <FacebookIcon className='inputIcon' />
              <input
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Faceboook'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Twitter</span>
            <div className='linkInputWrapper'>
              <TwitterIcon className='inputIcon' />
              <input
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Twitter'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Instagram</span>
            <div className='linkInputWrapper'>
              <InstagramIcon className='inputIcon' />
              <input
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Instagram'
              ></input>
              {linksEdit && <EditIcon className='inputIcon' />}
            </div>
          </div>
          <div className='linksItems'>
            <span className='linksTitle'>Website</span>
            <div className='linkInputWrapper'>
              <LanguageIcon className='inputIcon' />
              <input
                disabled={!linksEdit}
                className='linksInput'
                onChange={handleLinksInputs}
                placeholder='Website'
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
                className='linksOption'
                onChange={handleLinksInputs}
                disabled={!infoEdit}
              >
                <option value='Primary' name='Primary'>
                  Primary
                </option>
                <option value='Secondary' name='Secondary'>
                  Secondary
                </option>
                <option value='High Secondary' name='HIgh Secondary'>
                  High Secondary
                </option>
                <option value='Graduation' name='Graduation' selected>
                  Graduation
                </option>
                <option value='Post Graduation'>Post Graduation</option>
              </select>
            </div>
          </div>
          <div className='linksItemsPro'>
            <div className='linkItemProWrapper'>
              <span className='linksTitle'>What do you currently?</span>
              <select
                className='linksOption'
                onChange={handleLinksInputs}
                disabled={!infoEdit}
              >
                <option value='Schooling' name='Schooling'>
                  Schooling
                </option>
                <option value='Graduation' name='Graduation' selected>
                  College Student
                </option>
                <option value='Teaching' name='Teaching'>
                  Teaching
                </option>
                <option value='Job' name='Job'>
                  Job
                </option>
                <option value='Freelancing' name='Freelancing'>
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
