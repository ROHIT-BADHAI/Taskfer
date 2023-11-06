import React from 'react'
import { useAuthContext } from '../../context/authContext'

function Logout() {
    const {logout}=useAuthContext;
    localStorage.removeItem('user')
    logout();
  return (
    <div>
      LOGOUT
    </div>
  )
}

export default Logout
