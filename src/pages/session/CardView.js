import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'

import defaultDisplay from '../../images/examples/card.svg'

/* Vars */
const minExcerptChars = 80

const Profile = () => {
    const card = useStoreState(state => state.selectedCard)

    /* SellMore/BuyBack Shares Data */
    const marketValue = "402,755"
    const numberOfShares = "570,000"
    const royaltiesEarned = "126,400"

    const [sellMore, setSellMoreSelected] = useState(true)
    const [sellQuantity, setSellQuantity] = useState(0)
    const [buyQuantity, setBuyQuantity] = useState(0)

    const clickSell = () => {
        if (sellQuantity == 0) {
            console.log("No sell quantity")
            return
        }
        console.log("Sell: " + sellQuantity)
    }

    const clickBuy = () => {
        if (buyQuantity == 0) {
            console.log("No buy quantity")
            return
        }
        console.log("Buy: " + buyQuantity)
    }

    const displayMarketData = () => {
        return (
            <div className="flex flex-col p-4 pl-8 pr-8 sm:pl-4 sm:pr-4 md:w-3/4 lg:w-1/2 md:m-auto text-sm border-rounded font-semibold sm:font-bold">
                <div className="flex flex-row text-center">
                    <div className="w-1/2 text-left">Market Value: </div>
                    <div className="w-1/2 text-right">${marketValue}</div>
                </div>
                <div className="flex flex-row text-center">
                    <div className="w-1/2 text-left"># of Shares: </div>
                    <div className="w-1/2 text-right">{numberOfShares}%</div>
                </div>
                <div className="flex flex-row text-center">
                    <div className="w-1/2 text-left">Royalties Earned: </div>
                    <div className="w-1/2 text-right">${royaltiesEarned}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="input-container flex flex-col justify-center items-center mt-0">
                <div className="mb-2">
                    <img className="m-auto w-3/4 sm:w-full"
                         src={defaultDisplay} />
                </div>
                <h1 className="text-2xl sm:text-3xl font-semibold sm:mb-0 w-300px text-center sm:w-1/3">{ card.name }</h1>
                <h2 className="text-sm sm:text-base flex flex-col font-semibold w-2/3 sm:w-1/4 text-center mt-2">
                    { card.year } { card.brand } { card.name } { card.description } / {card.gradeCompany} { card.grade}
                </h2>

                <div className="flex flex-row justify-center align-middle flex-initial
                                p-1 rounded-full mt-3 bg-gray-100 theme-text-color font-semibold text-center
                                w-300px sm:w-1/2
                                text-base sm:text-xl">
                    <div
                        className={`w-1/2 rounded-full p-3 sm:p-4 hover:bg-white hover:text-yellow-300 cursor-pointer
                                    ${sellMore ? 'bg-white' : 'text-gray-300'}`}
                        onClick={() => {setSellMoreSelected(true)}}
                    >
                        Sell More Shares
                    </div>
                    <div
                        className={`w-1/2 rounded-full p-3 sm:p-4 hover:bg-white hover:text-yellow-300 cursor-pointer
                                    ${!sellMore ? 'bg-white' : 'text-gray-300'}`}
                        onClick={() => {setSellMoreSelected(false)}}
                    >
                        Buy Back Shares
                    </div>
                </div>
                {sellMore && (<>
                <div className="feed mt-2 md:mt-3 sm:mt-8 w-300px sm:w-1/2 rounded-xl bg-gray-100 mb-2">
                    { displayMarketData() }
                </div>
                <div className="flex flex-row w-300px sm:w-1/2">
                    <div className="w-6/12">
                        <input
                            className="p-4 w-full bg-gray-100 text-center outline-none"
                            id="sellSharesValue"
                            type="text"
                            onChange={(e)=>{setSellQuantity(e.target.value)}}
                            placeholder="Enter quantity"/>
                    </div>
                    <div className="w-6/12">
                        <div onClick={()=>{clickSell()}}
                            className="w-full text-center theme-color text-2xl p-3 text-white font-bold hover:bg-yellow-300 cursor-pointer">
                            Sell
                        </div>
                    </div>
                </div>
                </>)}
                {!sellMore && (<>
                    <div className="feed mt-2 md:mt-3 sm:mt-8 w-300px sm:w-1/2 rounded-xl bg-gray-100 mb-2">
                        { displayMarketData() }
                    </div>
                    <div className="flex flex-row w-300px sm:w-1/2">
                        <div className="w-6/12">
                            <input
                                className="p-4 w-full bg-gray-100 text-center outline-none"
                                id="buySharesValue"
                                type="text"
                                onChange={(e)=>{setBuyQuantity(e.target.value)}}
                                placeholder="Enter quantity"/>
                        </div>
                        <div className="w-6/12">
                            <div onClick={()=>{clickBuy()}}
                                 className="w-full text-center theme-color text-2xl p-3 text-white font-bold hover:bg-yellow-300 cursor-pointer">
                                Buy
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </>
    )
}

export default Profile
