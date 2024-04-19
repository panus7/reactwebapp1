import React, { createContext, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false, setIsLoggedIn: () => {
        console.log('setIsLoggedIn click')
    },
});

export default AuthContext;