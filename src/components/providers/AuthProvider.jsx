import { createContext } from "react";

export const UserLogContext = createContext(null)

const AuthProvider = ({children}) => {

    const userInfo = {name: 'Hello I am Mizan'}

    return (
        <UserLogContext.Provider value={userInfo}>
            {children}
        </UserLogContext.Provider>
    );
};

export default AuthProvider;