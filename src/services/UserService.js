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

            return result.json();
        },
    },
};
