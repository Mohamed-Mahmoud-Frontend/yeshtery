import  { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DummyDataContext = createContext();

export const useDummy = () => useContext(DummyDataContext);

const DummyJson = ({ children }) => {
  const [dummyData, setDummyData] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/39")
      .then((response) => {
        setDummyData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <DummyDataContext.Provider value={{ dummyData }}>
      {children}
    </DummyDataContext.Provider>
  );
};

export default DummyJson;
