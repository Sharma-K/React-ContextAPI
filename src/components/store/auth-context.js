import React, {useState} from 'react'

//create context takes a default context

//AuthContext is an object that contains the component

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{}
});

export const AuthContextProvider = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () =>{
        setIsLoggedIn(false);
    }

    const loginHandler = () =>{
        setIsLoggedIn(true);
    }

    return (<AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogIn: loginHandler }}>
        {props.children}
    </AuthContext.Provider>);
}
export default AuthContext;