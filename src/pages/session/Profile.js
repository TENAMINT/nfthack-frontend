import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'

import defaultDisplay from '../../images/default_display.jpg'

/* Vars */
const minExcerptChars = 80

const Profile = () => {
    const user = useStoreState(state => state.user)
    const profile = useStoreState(state => state.profile)

    const [postsSelected, setPostsSelected] = useState(true)

    return (
        <>
            <div className="input-container flex flex-col justify-center items-center mt-0">
                <div className="w-300px sm:w-1/2">
                    <div id="settings" className="sm:inline-block text-gray-400 tracking-tight font-semibold w-16 sm:w-32 bg-white sm:pr-4 sm:pl-4 sm:pt-3 sm:pb-3 sm:rounded-full text-base sm:text-lg cursor-pointer sm:bg-gray-100 hover:bg-gray-300">
                        <div className="w-full sm:w-1/2">
                            <svg className="w-5/12 text-gray-400 float-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="leading-5 pl-6 hidden sm:block">
                            Settings
                        </div>
                    </div>
                </div>
                <div className="w-1/6">
                    <img className="rounded-full"
                         src={profile.display ? profile.display : defaultDisplay} />
                </div>
                <h1 className="page-heading text-2xl sm:mb-0 sm:text-5xl">{ user.fullName }</h1>
                <h2 className="text-xl sm:text-2xl">{ profile.mantra }</h2>

                <div className="flex flex-row justify-center align-middle flex-initial
                                p-1 rounded-full mt-8 bg-gray-100 theme-text-color font-semibold text-center
                                w-300px sm:w-1/2
                                text-base sm:text-xl">
                    <div
                        className={`w-1/2 rounded-full p-3 sm:p-4 hover:bg-white hover:text-yellow-300 cursor-pointer
                                    ${postsSelected ? 'bg-white' : 'text-gray-300'}`}
                        onClick={() => {setPostsSelected(true)}}
                    >
                        Posts
                    </div>
                    <div
                        className={`w-1/2 rounded-full p-3 sm:p-4 hover:bg-white hover:text-yellow-300 cursor-pointer
                                    ${!postsSelected ? 'bg-white' : 'text-gray-300'}`}
                        onClick={() => {setPostsSelected(false)}}
                    >
                        Photos
                    </div>
                </div>
                {postsSelected && (<div id="posts" className="feed mt-6 md:mt-8 sm:mt-8 w-300px sm:w-1/2">
                    {profile.posts.map((post, index) => {
                        return (
                            <div id="post" key={index} className="flex flex-row mb-8 justify-center w-full">
                                <div className="rounded mr-5">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" rx="8" fill="#F6F6F6"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="leading-2">
                                            <h4 className="text-lg sm:text-xl font-semibold">{post.title}</h4>
                                        </div>
                                        <div className="leading-2 text-gray-400">{post.timestamp}m ago</div>
                                    </div>
                                    <p className="text-xs sm:text-sm sm:text-base">
                                        {post.content.substring(0, minExcerptChars)}
                                        {post.content.length > minExcerptChars ? '...' : ''}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>)}
                {!postsSelected && (<div id="photos" className="feed mt-6 sm:mt-8 w-300px sm:w-1/2 text-center">
                    Photos
                </div>)}
            </div>
        </>
    )
}

export default Profile
