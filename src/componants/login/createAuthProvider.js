import createTokenProvider from '../login/tokenProvider'
import React, { useState, useEffect } from 'react';


const createAuthProvider = () => {

    //making instance
    const tokenProvider = createTokenProvider();
    //pass token to the token provide
    const login = function (newTokens) {
        tokenProvider.setToken(newTokens);
    };
    // removes data from local storage
    const logout = () => {
        tokenProvider.setToken(null);
    };
    //inject access token to each request and returns promise for the response
    const authFetch = async (input, init) => {
        //take a token from the token provider
        const token = await tokenProvider.getToken();
        let tokenString;
        if (token) {
            tokenString = JSON.parse(token).token
        }
        init = init || {};
        init.headers = Object.assign(Object.assign({}, init.headers), { Authorization: `${tokenString}` });
        return fetch(input, init);
    };
    //
    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());
        useEffect(() => {
            const listener = (newIsLogged) => {
                setIsLogged(newIsLogged);
            };
            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);
        return [isLogged];
    };
    return {
        useAuth,
        authFetch,
        login,
        logout
    }
};

// export const { useAuth, authFetch, login, logout } = createAuthProvider();
export default createAuthProvider
