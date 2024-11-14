import React from "react";
import { createContext } from "react";

export const DataContext = createContext();

const UserContext = (props) => {
  const userName = "Faiz Mansuri";
  return (
    <div>
      <DataContext.Provider value={userName}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default UserContext;
