import { createContext, useState } from 'react';

const AuthInitialValues = {
    email:"",
    password:"", 
    authenticated: false,
    toggleAuth: () => null
};

export const AuthContext = createContext(AuthInitialValues);

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState( { 
       email:"", 
       password:"", 
       authenticated: false, 
       })
       
      const toggleAuth = (email, password) =>
       setIsLoggedIn({
         email: email,
         password: password,
         authenticated: !isLoggedIn.authenticated,
       });
     
   
     return  <AuthContext.Provider value={{...isLoggedIn, toggleAuth}} >{children}</AuthContext.Provider>
   }
   