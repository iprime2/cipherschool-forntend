import './Home.scss'

import React from 'react'

import { Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <Navigate to='/profile' />
    </div>
  )
}

export default Home
