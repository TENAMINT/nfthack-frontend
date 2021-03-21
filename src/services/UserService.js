const API_URL = process.env.API_URL || 'http://localhost:3001';

module.exports = {
    userService: {
        register: async (user) => {
            const registerUrl = new URL('/register', API_URL);

            const result = await fetch(registerUrl.href, {
              method: 'POST',
              body: JSON.stringify(user),
              headers: { 'Content-Type': 'application/json' }
            });

            if (result.status === 201) {
              return result.json();
            }
        },
        submit: async (card) => {
            const submitUrl = new URL('/card/submit', API_URL);

            const result = await fetch(submitUrl.href, {
              method: 'POST',
              body: JSON.stringify(card),
              headers: { 'Content-Type': 'application/json' }
            });

            return result.json();
        }
    },
};
