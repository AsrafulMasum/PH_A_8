import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DonationCards from "../components/DonationCards";
import { createContext } from "react";

export const DataContext = createContext()

const Home = () => {
  const data = useLoaderData()

  return (
    <div>
      <DataContext.Provider value={data}>
        <Banner></Banner>
        <DonationCards data={data}></DonationCards>
      </DataContext.Provider>
    </div>
  );
};

export default Home;
