import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className="flex items-center justify-center min-h-96">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <input 
                    className="w-64 mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Username"
                />

                <input 
                    className="w-64 mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password"
                />

                <button 
                    onClick={handleSubmit}
                    className="w-64 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                Submit
                </button>
            </div>
        </div>
    )
}

export default Login
