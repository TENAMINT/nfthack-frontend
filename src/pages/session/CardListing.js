import React, {useEffect, useState} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy'
import { Link } from 'react-router-dom'

import defaultDisplay from '../../images/examples/card.svg'

/* Vars */
const minExcerptChars = 80

const Profile = () => {
    const cards = useStoreState(state => state.cards)
    const setSelectedCard = useStoreActions(actions => actions.setSelectedCard);
    const execCards = useStoreActions(actions => actions.execCards);

    useEffect(() => {
        execCards({})
    }, [])

    const selectCard = (card) => {
        console.log(card)
        setSelectedCard(card)
        console.log("Selected")
    }

    return (
        <>
            <div className="w-300px sm:w-1/2 m-auto">
                <h1 className="page-heading mt-0 sm:mt-0 text-center">Card Listings</h1>


                <div id="listing"
                     className="flex flex-col items-center mt-2 sm:mt-8">

                    {cards.map((card, index) => {
                        return (
                            <div id="result"
                                className="font-semibold text-base sm:text-xl w-11/12 sm:w-full"
                                key={index}>
                                <Link
                                    onClick={()=>{selectCard(card)}}
                                    className="hover:bg-gray-100 p-2 rounded-full"
                                      to="/card-details"
                                    >
                                    {card.name}
                                </Link>
                                <hr className="p-2 mt-3"/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Profile
