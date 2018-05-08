export const SET_LOGIN = 'SET_LOGIN';

export function login(login) {
    return {
        type: SET_LOGIN,
        login
    }
};
