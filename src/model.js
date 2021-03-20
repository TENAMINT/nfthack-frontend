import { action, thunk } from 'easy-peasy'

// We are using easy-peasy state management, doc here: https://easy-peasy.now.sh/
export default {
    // States
    user: {
        auth: false, /* prototype: will enable session navbar */
        token: '123',
        fullName: "Victoria Robertson",
        email: 'victoria@gmail.com',
        username: 'vicky5',
        password: '123'
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
    // Actions
}
