import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="input-container flex flex-col justify-center items-center mt-0">
            <h1 className="page-heading">Login</h1>
            <input id="username" name="username" type="text" placeholder="Username" />
            <input id="password" name="password" type="password" placeholder="Password" />
            <div className="default-btn w-11/12 sm:w-1/3 mt-10 theme-color text-base sm:text-xl">Login</div>
            <Link to='/forgot-password'>
                <div className="theme-text-color text-lg mt-2 cursor-pointer hover:text-yellow-600">
                    Forgot your password?
                </div>
            </Link>
        </div>
    )
}

export default Login
