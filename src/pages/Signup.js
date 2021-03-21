import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy';


const SignupStep2 = () => {
    const mnemonic = useStoreState(state => state.user.mnemonic);
    const history = useHistory();

    const registerWallet = useStoreActions(actions => actions.registerWallet);
    const onSubmitClick = useCallback(
        () => registerWallet().then(() => history.push('/')).catch((error) => console.error(error)),
        [registerWallet],
    );

    return (
         <div className="input-container flex flex-col justify-center items-center mt-0">
            <h1 className="page-heading">Copy your Recovery Phrase</h1>
            <h3>Put this somewhere safe, it is the only way to recover a lost account:</h3>
            <textarea id="fullName" name="fullName" type="text" defaultValue={mnemonic} />
            <button className="default-btn w-11/12 sm:w-1/3 mt-10 theme-color text-base sm:text-xl" onClick={onSubmitClick}>I've copied it down in a safe place</button>
        </div>
    );
}

const SignupStep1 = () => {
    const updateFullName = useStoreActions(actions => actions.updateFullName);
    const onChangeFullName = useCallback(
        (e) => updateFullName(e.target.value),
        [updateFullName],
    );

    const updateEmail = useStoreActions(actions => actions.updateEmail);
    const onChangeEmail = useCallback(
        (e) => updateEmail(e.target.value),
        [updateEmail],
    );

    const updatePassword = useStoreActions(actions => actions.updatePassword);
    const onChangePassword = useCallback(
        (e) => updatePassword(e.target.value),
        [updatePassword],
    );

    const registerUser = useStoreActions(actions => actions.registerUser);
    const onSubmitClick = useCallback(
        () => registerUser().catch((error) => console.error(error)),
        [registerUser],
    );

    return (
        <div className="input-container flex flex-col justify-center items-center mt-0">
            <h1 className="page-heading">Sign Up</h1>
            <input id="fullName" name="fullName" type="text" placeholder="Full Name" onChange={onChangeFullName} />
            <input id="email" name="email" type="text" placeholder="Email" onChange={onChangeEmail} />
            {/* <input id="username" name="username" type="text" placeholder="Username" /> */}
            <input id="password" name="password" type="password" placeholder="Password" onChange={onChangePassword} />
            <div className="w-11/12 sm:w-1/2 mt-8 text-gray-500 tracking-tight font-semibold text-base ml-1 sm:text-center">
                <input className="bg-gray-600" type="checkbox" id="subscribe" name="subscribe" value="Bike" />
                <label htmlFor="subscribe"> I would like to receive your newsletter and other promotional information</label>
            </div>
            <button className="default-btn w-11/12 sm:w-1/3 mt-10 theme-color text-base sm:text-xl" onClick={onSubmitClick}>Sign Up</button>
            <Link to='/forgot-password'>
                <div className="theme-text-color text-lg mt-2 cursor-pointer hover:text-yellow-600">
                    Forgot your password?
                </div>
            </Link>
        </div>
    );
};

const Signup = () => {
   const mnemonic = useStoreState(state => state.user.mnemonic);

   if (mnemonic.length) {
        return <SignupStep2 />;
   }

   return <SignupStep1 />; 
}

export default Signup
