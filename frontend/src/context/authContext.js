import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'

const authContext=createContext({
    user:null,
    login:()=>{},
    logout:()=>{}
})

export const  AuthContextProvider=({children})=>{
  const [user,setUser]=useState(null);

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    if(user) login(user)
  },[])

    function login(userData) {
      setUser(userData)
    }

    function logout(){
        setUser(null)
        localStorage.removeItem('user')
    }


    return (
        <authContext.Provider
          value={{ user,login,logout }}
        >
          {children}
        </authContext.Provider>
      );
}


export function useAuthContext() {
    const { user,login,logout} =
      useContext(authContext);
    return {user,login,logout };
  }
