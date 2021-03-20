import React from 'react'

const SubmitCard = () => {
  return (
      <div className="input-container flex flex-col justify-center items-center mt-0">
        <h1 className="page-heading">Submit Card</h1>
        <input id="card" name="card" type="text" placeholder="Start Typing Card..." />
        <input id="dateSent" name="dateSent" type="text" placeholder="Date Sent" />
        <input id="trackingNumber" name="trackingNumber" type="text" placeholder="Tracking Number" />
        <textarea id="cardDesc" name="cardDesc" rows="3" placeholder="Brief Description of Your Card" />
        <input id="promo" name="promo" type="text" placeholder="Promo" />
        <div className="default-btn w-11/12 sm:w-1/3 mt-4 theme-color text-base sm:text-xl">Send</div>
      </div>
  )
}

export default SubmitCard
