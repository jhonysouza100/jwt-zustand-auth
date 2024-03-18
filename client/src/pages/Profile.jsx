import {useAuthstore } from '../store/auth'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const logout = useAuthstore(state => state.setLogout)
  const profile = useAuthstore(state => state.profile)

  const navigate  = useNavigate()

  return (
    <div>
      Profile Page

      {JSON.stringify(profile)}

      {/* cerrar seccion */}
      <button onClick={() => {

        logout()

        navigate('/login')

      }}>Logout </button>

    </div>
  );
}

export default Profile;