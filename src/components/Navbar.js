import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    const getMobile = () => {
        return (
            <>
                <Link className="nav-item" to='/'><div>Browse</div></Link>
                <Link className="nav-item" to='/login'><div>Login</div></Link>
                <Link className="nav-item" to='/sign-up'><div>Sign Up</div></Link>
            </>
        )
    }

    return (
        <>
            <div className="sm:hidden w-screen h-12" onClick={() => {setMobile(!mobile)}}>
                <svg className="sm:hidden w-1/12 absolute right-0 m-4"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            {mobile && (<div className="flex flex-col sm:hidden transition duration-500 mobile-nav absolute mt-5" onClick={()=>{setMobile(false)}}>
                { getMobile() }
            </div>)}

            <div className="hidden sm:inline-flex navbar flex flex-wrap flex-col sm:flex-row w-screen p-5 pr-10 justify-end">
                { getMobile() }
            </div>
        </>
    )
}

export default Navbar
