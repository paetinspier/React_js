import React, { createContext, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({children}){

    const [userName, setUsername] = useState();
    const [userPassword, setUserPassword] = useState();

    return(
        <UserContext.Provider value={{ userName, setUsername, userPassword, setUserPassword }}>{children}</UserContext.Provider>
    );
}

export default UserContext;