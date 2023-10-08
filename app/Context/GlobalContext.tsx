"use client";
import React from 'react'
import { createContext, useState, useContext } from 'react';

type ContextProps = {
  userData: {
    country_origin: string;
    country_residence: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<{
    country_origin: string;
    country_residence: string;
  }>>;
}


const Context = createContext<ContextProps>({
  userData: {
    country_origin: "",
    country_residence: "",
  },
  setUserData: () => {},
});

export const ContextProvider = ({children}:any) => {

  const [userData, setUserData] = useState({
    country_origin: "Select Country",
    country_residence: "",
  });

  return (
    <Context.Provider value={{ userData, setUserData }}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context);
  
  
