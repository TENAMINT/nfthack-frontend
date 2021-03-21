import React from 'react'
import Searchbar from "../components/Searchbar";

const Index = () => {
    return (
    <>
        <div className="mast flex flex-col justify-center items-center">
            <div className="text-center p-5 mt-16">
              <h1 className="text-4xl sm:text-7xl font-bold tracking-tight">Buy & Sell</h1>
              <h2 className="text-3xl sm:text-6xl font-bold mt-2.5 tracking-tight">Authentic Cards</h2>
            </div>
            <Searchbar width="w-10/12 sm:w-7/12"/>
            <div className="theme-color p-7 w-screen mt-20 text-white" />
        </div>
        <div className="flex flex-col flex-wrap justify-center align-middle mt-10 text-center">
            <div className="flex flex-col sm:flex-row m-auto justify-center">

                <div className="mb-4 sm:mb-12 sm:mb-0">
                    <img className="m-auto w-1/2 w-8/12" src="https://img1.wsimg.com/isteam/ip/6c05e33d-031c-4c31-bc95-997f2c8a8ce3/Baseball-Cards-For-Sale-300x300.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:300,cg:true" />
                </div>
                <div className="sm:ml-12 p-4 sm:p-0 sm:text-left sm:text-base md:text-lg sm:w-1/2 align-middle">
                    Ball Street is a marketplace platform that acts like a stock market for buying and selling shares of hard-to-find trading cards.
                    <br /> <br />
                    Fractional shares mean that anyone can afford to buy into the best, rarest cards without the huge financial commitment - but with all the upside!
                    <br /><br />
                    (like Wall Street, but for trading cards)
                </div>

            </div>
        </div>
    </>
  )
}

export default Index
