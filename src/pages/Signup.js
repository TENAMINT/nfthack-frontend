import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="input-container flex flex-col justify-center items-center mt-0">
            <h1 className="page-heading">Sign Up</h1>
            <input id="fullName" name="fullName" type="text" placeholder="Full Name" />
            <input id="email" name="email" type="text" placeholder="Email" />
            <input id="username" name="username" type="text" placeholder="Username" />
            <input id="password" name="password" type="password" placeholder="Password" />
            <div className="w-11/12 sm:w-1/2 mt-8 text-gray-500 tracking-tight font-semibold text-base ml-1 sm:text-center">
                <input className="bg-gray-600" type="checkbox" id="subscribe" name="subscribe" value="Bike" />
                <label htmlFor="subscribe"> I would like to receive your newsletter and other promotional information</label>
            </div>
            <div className="default-btn w-11/12 sm:w-1/3 mt-10 theme-color text-base sm:text-xl">Sign Up</div>
            <Link to='/forgot-password'>
                <div className="theme-text-color text-lg mt-2 cursor-pointer hover:text-yellow-600">
                    Forgot your password?
                </div>
            </Link>
        </div>
    )
}

export default Signup
