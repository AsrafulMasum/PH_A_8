import { useContext } from "react";
import DonationCard from "./DonationCard";
import { DataContext } from "../pages/Home";

const DonationCards = () => {
  const data = useContext(DataContext)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
      {
        data.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
      }
    </div>
  );
};

export default DonationCards;