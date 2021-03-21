import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'

import defaultDisplay from '../../images/default_display.jpg'

/* Vars */
const minExcerptChars = 80

const Profile = () => {
    const user = useStoreState(state => state.user)
    const cards = useStoreState(state => state.cards)

    const [cardsSelected, setCardsSelected] = useState(true)

    return (
        <>
            <div className="input-container flex flex-col justify-center items-center mt-0">
                <div className="w-300px sm:w-1/2">
                    <div id="settings" className="sm:inline-block text-gray-400 tracking-tight font-semibold w-16 sm:w-32 bg-white sm:pr-4 sm:pl-4 sm:pt-3 sm:pb-3 sm:rounded-full text-base sm:text-lg cursor-pointer sm:bg-gray-100 hover:bg-gray-300">
                        <div className="w-full sm:w-1/2">
                            <svg className="w-5/12 text-gray-400 float-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="leading-5 pl-6 hidden sm:block">
                            Settings
                        </div>
                    </div>
                </div>
                <div className="w-1/6">
                    <img className="rounded-full"
                         src={user.display ? user.display : defaultDisplay} />
                </div>
                <h1 className="page-heading text-2xl sm:mb-0 sm:text-5xl">{ user.fullName }</h1>
                <h2 className="text-xl sm:text-2xl">{ user.mantra }</h2>

                <div className="flex flex-row justify-center align-middle flex-initial
                                p-1 rounded-full mt-8 bg-gray-100 theme-text-color font-semibold text-center
                                w-300px sm:w-1/2
                                text-base sm:text-xl">
                    <div
                        className={`w-1/2 rounded-full p-3 sm:p-4 hover:bg-white hover:text-yellow-300 cursor-pointer
                                    ${cardsSelected ? 'bg-white' : 'text-gray-300'}`}
                        onClick={() => {setCardsSelected(true)}}
                    >
                        Portfolio
                    </div>
                    <div
                        className={`w-1/2 rounded-full p-3 sm:p-4 hover:bg-white hover:text-yellow-300 cursor-pointer
                                    ${!cardsSelected ? 'bg-white' : 'text-gray-300'}`}
                        onClick={() => {setCardsSelected(false)}}
                    >
                        History
                    </div>
                </div>
                {cardsSelected && (<div id="cards" className="feed mt-6 md:mt-8 sm:mt-8 w-300px sm:w-1/2">
                    {cards.map((card, index) => {
                        return (
                            <div id="card" key={index} className="flex flex-row mb-8 w-full justify-center">
                                <div className="rounded mr-5">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" rx="8" fill="#F6F6F6"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="flex flex-row items-center justify-between sm:w-96">
                                        <div className="leading-2">
                                            <h4 className="text-lg sm:text-xl font-semibold">{card.name}</h4>
                                        </div>
                                        <div id="year" className="leading-2 text-gray-400 ml-4"> ({card.year})</div>
                                    </div>
                                    <p className="text-xs sm:text-sm sm:text-base">
                                        {card.description.substring(0, minExcerptChars)}
                                        {card.description.length > minExcerptChars ? '...' : ''}
                                    </p>-
                                </div>
                            </div>
                        )
                    })}
                </div>)}
                {!cardsSelected && (<div id="history" className="feed mt-6 sm:mt-8 w-300px sm:w-1/2 text-center">
                    History
                </div>)}
            </div>
        </>
    )
}

export default Profile
