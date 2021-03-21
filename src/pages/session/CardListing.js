import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'

import defaultDisplay from '../../images/examples/card.svg'

/* Vars */
const minExcerptChars = 80

const Profile = () => {
    const cards = useStoreState(state => state.cards)

    const searchResults = [
        {card:{name:'result1'}},
        {card:{name:'result2'}},
        {card:{name:'result3'}},
    ]

    return (
        <>
            <div className="w-300px sm:w-1/2 m-auto">
                <h1 className="page-heading mt-0 sm:mt-0 text-center">Card Listings</h1>


                <div id="listing"
                     className="flex flex-col items-center mt-2 sm:mt-8">

                    {searchResults.map((result, index) => {
                        return (
                            <div id="result"
                                className="font-semibold text-base sm:text-xl w-11/12 sm:w-full"
                                key={index}>
                                <Link className="hover:bg-gray-100 p-2 rounded-full"
                                      to="/card-details">
                                    {result.card.name}
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
