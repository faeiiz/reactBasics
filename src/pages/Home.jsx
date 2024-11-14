import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";
// import { DataContext } from "./context/UserContext";

const Home = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <h1>Home {data}</h1>
    </div>
  );
};

export default Home;
