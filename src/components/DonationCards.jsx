import { useContext, useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { DataContext } from "../pages/Home";
import PropTypes from 'prop-types';

const DonationCards = ({searchValue}) => {
  const data = useContext(DataContext)

  // const value = searchValue.toLowerCase()

  const [displayCard, setDisplayCard] = useState([])


  useEffect(() => {
    const searchedData = data.filter(card => card.category.toLowerCase().includes(searchValue.toLowerCase()))
    setDisplayCard(searchedData);
  } , [data, searchValue])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
      {
        displayCard.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
      }
    </div>
  );
};

DonationCards.propTypes = {
  searchValue : PropTypes.string.isRequired
}

export default DonationCards;