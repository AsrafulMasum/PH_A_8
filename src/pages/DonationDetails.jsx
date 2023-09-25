import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const data = useLoaderData()
  const {id} = useParams()
  const idInt = parseInt(id)
  const [currentData, setCurrentData] = useState([])
  useEffect(() => {
    {
      const foundData = data.find(singleData => singleData.id === idInt)
      setCurrentData(foundData)
    }
  }, [data, idInt])
  return (
    <div className="my-10">
      <div>
        <img className="w-full rounded-lg" src={currentData.image} alt="" />
      </div>
      <div style={{
        background: '#0B0B0B7F',
        backgroundBlendMode: 'overlay'
      }} className="py-8 pl-8 relative -top-28 rounded-b-lg">
        <button  style={{
          backgroundColor: `${currentData.text_button_bg_color}`
        }} className="px-6 py-3 rounded-md text-white font-semibold">Donate ${currentData.price}</button>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-10 -mt-16">{currentData.name}</h2>
      </div>
      <div>
        <p className="text-lg text-[#0B0B0BB3]">{currentData.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;