"use client";
import React from 'react'
import { createContext, useState, useContext } from 'react';
import AppReducer from '../apply/reducer/AppReducer';

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


const Context = createContext<ContextProps>(AppReducer);

export const ContextProvider = ({children}:any) => {

  const [userData, setUserData] = useState({
    country_origin: "Select Country",
    country_residence: "",
  });

  return (
    <Context.Provider value={ AppReducer }>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context);
  
  
