import React, {useEffect} from 'react'
import { useStoreActions } from 'easy-peasy'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    let history = useHistory()
    const logout = useStoreActions(actions => actions.clearUser)

    useEffect(() => {
        console.log("Logging out...")
        logout({})
        history.push('/')
    })

    return (
        <>

        </>
    );
}

export default Logout
