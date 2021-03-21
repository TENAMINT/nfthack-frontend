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
        mantra: 'A mantra goes here',
        display: '', /* profile pic */
        card: {
          name: 'Lebron James Cavaliers',
          brand: 'Topps Collection',
          year: 2003,
          description: 'RC Rookie',
          gradeCompany: 'PSA',
          grade: 10,
        },
    },
    cards: [
        {
            name: 'Lebron James Cavaliers',
            brand: 'Topps Collection',
            year: 2003,
            description: 'RC Rookie',
            gradeCompany: 'PSA',
            grade: 10,
        },
        {
            name: 'Lebron James Cavaliers 2',
            brand: 'Topps Collection',
            year: 2003,
            description: 'RC Rookie',
            gradeCompany: 'PSA',
            grade: 10,
        }
    ],

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

    updateCardName: action((state, payload) => {
        state.user.card.name = payload;
    }),

    updateCardBrand: action((state, payload) => {
        state.user.card.brand = payload;
    }),

    updateCardYear: action((state, payload) => {
        state.user.card.year = payload;
    }),

    updateCardDescription: action((state, payload) => {
        state.user.card.description = payload;
    }),

    updateCardGradeCompany: action((state, payload) => {
        state.user.card.gradeCompany = payload;
    }),

    updateCardGrade: action((state, payload) => {
        state.user.card.grade = payload;
    }),
}
