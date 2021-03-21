import { action, thunk } from 'easy-peasy'
import { userService } from './services/UserService';

const base_api = 'http://127.0.0.1:5000'

// We are using easy-peasy state management, doc here: https://easy-peasy.now.sh/
export default {
    // States
    user:{
        id: 1,
        mnemonic: ""
    },
    selectedCard:{},
    cards: [],

    // API

    // Login
    execUser: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState()
        const id = payload.id

        console.log("Set User")
        const { data, error } = fetch(base_api + '/users?id=' + id)
            .then(res => res.json())
            .then(data => actions.setUser(data))
    }),

    loginUser: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState()
        const username = payload.username
        const password = payload.password

        console.log("Login User")
        console.log(base_api + '/users?username=' + username + '&password=' + password)
        const { data, error } = fetch(base_api + '/users?username=' + username + '&password=' + password)
            .then(res => res.json())
            .then(data => {
                if (!data || data.length === 0) {
                    console.log("Login Error")
                } else {
                    console.log("Login Success")
                    actions.setUser(data)
                }
            })
    }),

    setUser: action((state, payload) => {
        state.user = {...payload[0]}
        console.log(state.user)
    }),

    clearUser: action((state, payload) => {
        state.user = {}
        console.log("Cleared User")
    }),

    // Get Cards
    execCards: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState()

        console.log("Get Cards")
        const { data, error } = fetch(base_api + '/cards')
            .then(res => res.json())
            .then(data => actions.setCards(data))
    }),

    setCards: action((state, payload) => {
        state.cards = payload
    }),

    setSelectedCard: action((state, payload) => {
        state.selectedCard = { ...payload }
    }),


    // Thunks
    registerUser: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState();

        const user = await userService.register({ step: 0, ...state.user });

        actions.updateUser(user);
    }),
    registerWallet: thunk(async (actions, payload, { getStoreState }) => {
        const state = getStoreState();

        await userService.register({ step: 1, ...state.user });

        // TODO: Proper login authentication
        actions.updateUser({ auth: true, ...state.user });
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

    submitCard: thunk(async (actions, payload) => {
        const card = await userService.submit(payload);

        actions.addCard(card);
    }),

    addCard: action((state, payload) => {
        state.cards.push(payload);
    }),

}
