import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext(null);

const loggedInUser = JSON.parse(localStorage.getItem("UserLogged")) || null

const initialState = {
  isLoggedIn: Boolean(loggedInUser),
  user: loggedInUser
}

export const ContextProvider = props => {
    const [user, setUser] = useState(initialState.user);
    const [isLoggedIn, setIsLoggedIn] = useState(initialState.isLoggedIn);
    const navigate = useNavigate();

    const login = (newUser) => {
      setUser(newUser)
      setIsLoggedIn(true)
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
        localStorage.removeItem("UserLogged")
        navigate("/login")
    }

    return (
      <AuthContext.Provider
        value={{
          user,
          isLoggedIn,
          login,
          logout
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext can only be used inside AuthProvider");
    }
    return context;
};
  

