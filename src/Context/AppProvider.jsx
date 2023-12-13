import { createContext, useEffect, useState } from "react";
import { API_KEY, BREED_API } from "../constants";

export const AppContext = createContext();

function AppProvider(props) {
  const [catsData, setCatsData] = useState([]);
  console.log('ctx')
  const getBreedData = async () => {
    const response = await fetch(BREED_API, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
      },
    });
    const op = await response.json();
    console.log(op, 'ctx');
    setCatsData(op);
    return op;
  };

  const value = {
    catsData,
    setCatsData,
  };

  useEffect(() => {
    getBreedData();
  }, []);

  // eslint-disable-next-line react/prop-types
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

export default AppProvider;
