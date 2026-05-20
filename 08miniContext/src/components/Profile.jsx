import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
        
    if (!user) {
        return (
            <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md text-center">
                <p className="text-gray-600">Please login</p>
            </div>
        )
    }

    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Welcome</h2>
            <p className="text-lg text-blue-600 font-medium">{user.username}</p>
        </div>
    )
    
}

export default Profile
