import React, {useEffect, useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import {useStoreActions, useStoreState} from "easy-peasy";

const Login = () => {
    let history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const user = useStoreState(state => state.user)
    const loginUser = useStoreActions(actions => actions.loginUser);

    const clickLogin = () => {
        loginUser({username: username, password: password})
    }

    useEffect(() => {
        if ("username" in user) {
            console.log("Logging in & redirecting...")
            history.push('/profile')
        }
    }, [user])

    return (
        <div className="input-container flex flex-col justify-center items-center mt-0">
            <h1 className="page-heading">Login</h1>
            <input id="username" name="username"
                   onChange={(e)=>{setUsername(e.target.value)}}
                   type="text" placeholder="Username" />
            <input id="password" name="password"
                   onChange={(e)=>{setPassword(e.target.value)}}
                   type="password" placeholder="Password" />
            <div onClick={()=>{clickLogin()}}
                className="default-btn w-11/12 sm:w-1/3 mt-10 theme-color text-base sm:text-xl">Login</div>
            <Link to='/forgot-password'>
                <div className="theme-text-color text-lg mt-2 cursor-pointer hover:text-yellow-600">
                    Forgot your password?
                </div>
            </Link>
        </div>
    )
}

export default Login
