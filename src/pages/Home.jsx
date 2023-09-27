import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DonationCards from "../components/DonationCards";
import { createContext, useState } from "react";
import { Helmet } from "react-helmet-async";

export const DataContext = createContext()

const Home = () => {
  const data = useLoaderData()

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  return (
    <div>
      <Helmet>
        <title>Donation Campaign | Home</title>
      </Helmet>
      <DataContext.Provider value={data}>
        <Banner handleSearch={handleSearch}></Banner>
        <DonationCards searchValue={searchValue} data={data}></DonationCards>
      </DataContext.Provider>
    </div>
  );
};

export default Home;
