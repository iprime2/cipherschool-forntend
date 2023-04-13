import { useContext } from 'react'
import './App.scss'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { AuthContext } from './context/authContext/AuthContext'
import Home from './pages/Home/Home'
import Logout from './pages/Logout/logout'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Login />}></Route>
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to='/login' />}
        />
        <Route
          path='/logout'
          element={user ? <Logout /> : <Navigate to='/' />}
        />
      </Routes>
    </Router>
  )
}

export default App
