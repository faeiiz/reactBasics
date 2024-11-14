import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    setPage(page + 1);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    setData(response.data);
    console.log(response.data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={getData}
        className="bg-teal-400 font-semibold text-black px-4 py-2 rounded-md active:scale-95 transition-all duration-150 m-10 "
      >
        Change Data
      </button>
      <div className="flex flex-wrap justify-center items-center w-3/5 h-3/5">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="flex m-10 ">
              <img
                className=" rounded-s grayscale blur-[1px] hover:blur-0 hover:scale-105 hover:grayscale-0 transition-all duration-1000"
                src={item.download_url}
                alt={item.author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
