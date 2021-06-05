import React, { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true)
    console.log(json)
  }

  async function userLogin(email, senha) {
    const { url, options } = TOKEN_POST({email: email, senha: senha});
    const tokenRes = await fetch(url, options);
    const {acessToken} = await tokenRes.json();
    localStorage.setItem('Token', acessToken);
    getUser(acessToken) 
  }


  return (
    <UserContext.Provider value={userLogin}>
      {children}
    </UserContext.Provider>
  )
}


