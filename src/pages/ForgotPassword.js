import React from 'react'

const ForgotPassword = () => {
  return (
      <div className="input-container flex flex-col justify-center items-center mt-0">
        <h1 className="page-heading">Forgot Password</h1>
        <input id="email" name="email" type="text" placeholder="Email" />
        <div className="default-btn w-11/12 sm:w-1/3 mt-10 theme-color text-base sm:text-xl">Send Email</div>
      </div>
  )
}

export default ForgotPassword
