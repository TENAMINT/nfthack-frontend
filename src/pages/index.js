import React from 'react'

const Index = () => {
    return (
    <div className="flex justify-center h-screen items-center">
      <div>
          <img className="invert" src="https://img1.wsimg.com/isteam/ip/6c05e33d-031c-4c31-bc95-997f2c8a8ce3/2494706.svg/:/rs=w:365,h:274.4360902255639,cg:true,m/cr=w:365,h:274.4360902255639/fx-gs" />

          <div id="price" className="text-white text-3xl text-center p-5">
              0.0000
          </div>

          <div className="default-btn mt-3">Bid</div>
          <div className="default-btn mt-3">Ask</div>
      </div>
    </div>
  )
}

export default Index
