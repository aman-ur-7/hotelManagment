import React, { createContext, useState } from "react";

const MY_CONTEXT = createContext();

// eslint-disable-next-line react/prop-types
const MyProvider = ({ children }) => {
  const [data, setData] = useState();

  const value = { data, setData };
  localStorage.setItem("value", JSON.stringify(value));

  return <MY_CONTEXT.Provider value={value}>{children}</MY_CONTEXT.Provider>;
};

export { MY_CONTEXT, MyProvider };
