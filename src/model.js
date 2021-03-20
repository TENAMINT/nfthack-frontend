import { action, thunk } from 'easy-peasy'

import { userService } from './services/UserService';

// We are using easy-peasy state management, doc here: https://easy-peasy.now.sh/
export default {
    // States
    user: {
        auth: false, /* prototype: will enable session navbar */
        token: '123',
        fullName: "Victoria Robertson",
        email: 'victoria@gmail.com',
        password: '123',
        mnemonic: '',
    },
    profile: {
        mantra: 'A mantra goes here',
        display: 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg',
        posts: [
            {
                title: 'Header',
                display: '',
                content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish',
                timestamp: new Date().getDay()-1
            },
            {
                title: 'Header',
                display: '',
                content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish',
                timestamp: new Date().getDay()-1
            }
        ]
    },

    // Thunks
    registerUser: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState();

        const user = await userService.register({ step: 0, ...state.user });

        actions.updateUser(user);
    }),
    registerWallet: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState();

        const user = await userService.register({ step: 1, ...state.user });

        actions.updateUser(user);
    }),

    // Actions
    updateFullName: action((state, payload) => {
        state.user.fullName = payload;
    }),

    updateEmail: action((state, payload) => {
        state.user.email = payload;  
    }),
    updatePassword: action((state, payload) => {
        state.user.password = payload;
    }),

    updateUser: action((state, payload) => {
        console.log('USER', payload);
        state.user = { ...payload };
    }),
}
