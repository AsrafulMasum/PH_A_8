import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DonationCards from "../components/DonationCards";
import { createContext, useState } from "react";

export const DataContext = createContext()

const Home = () => {
  const data = useLoaderData()

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  return (
    <div>
      <DataContext.Provider value={data}>
        <Banner handleSearch={handleSearch}></Banner>
        <DonationCards searchValue={searchValue} data={data}></DonationCards>
      </DataContext.Provider>
    </div>
  );
};

export default Home;
