import { action, thunk } from 'easy-peasy'

import { userService } from './services/UserService';

// We are using easy-peasy state management, doc here: https://easy-peasy.now.sh/
export default {
    // States
    user:{},
    selectedCard:{},

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
