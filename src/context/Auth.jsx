'use client'
import React, { createContext, useEffect, useState } from 'react'


export let AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  let [token, setToken] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let TokenStorage = localStorage.getItem("token");
      if (TokenStorage) {
        setToken(TokenStorage);

      }
    }
  }, [])
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}