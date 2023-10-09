import React from "react";

const initialState = {
  country_origin: "Hola Hola",
  country_residence: "Select Country",
};

export default function AppReducer(
  state = initialState,
  { type, payload }: any,
) {
  switch (type) {
    case "SET_COUNTRY_ORIGIN":
      return {
        ...state,
        country_origin: payload,
      };
    case "SET_COUNTRY_RESIDENCE":
      return {
        ...state,
        country_residence: payload,
      };
    default:
      return state;
  }
}
