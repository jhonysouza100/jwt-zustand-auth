import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Navigation from './components/Navigation'
import ProtectedRoutes from './components/ProtectedRoutes'

import { useAuthstore } from './store/auth'

function App() {

  const isAllow = useAuthstore(state => state.isAuth)

  return (
    <>
      <BrowserRouter>

      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* <Route path='/profile' element={
            <ProtectedRoutes isAllow={false}>
              <Profile />
            </ProtectedRoutes>
          } /> */}

          <Route path='' element={<ProtectedRoutes isAllow={isAllow} />}>
            <Route path='/profile' element={<Profile />} />
            {/* <Route path='/dashboard' element={<></>} /> */}
          </Route>

        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
