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

function App() {
  const user = false
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Profile /> : <Login />}></Route>
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
      </Routes>
    </Router>
  )
}

export default App
