import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
import '../App.css'
function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div >Please Login</div>
                return <div className='name'>Welcome {user.username}</div>
}

export default Profile