import { useLoaderData } from "react-router-dom";
import { getLSIds } from "../utility/localStorage";
import { useEffect, useState } from "react";
import DonationPageCard from "../components/DonationPageCard";
import { Helmet } from "react-helmet-async";

const Donation = () => {
  const allData = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);
  const [displayDataLength, setDisplayDataLength] = useState(4)
  useEffect(() => {
    const storedDonationIds = getLSIds();
    if (storedDonationIds) {
      const allDonatedData = allData.filter((data) =>
        storedDonationIds.includes(data.id)
      );
      setDonatedData(allDonatedData);
    }
  }, [allData]);

  return (
    <div>
      <Helmet>
       <title>Donation Campaign | Donation</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
        {donatedData?.slice(0, displayDataLength).map((data) => (
          <DonationPageCard key={data.id} data={data}></DonationPageCard>
        ))}
      </div>
      <div className={donatedData.length < 5 || donatedData.length === displayDataLength ? "hidden" : "text-center"}>
        <button onClick={() => setDisplayDataLength(donatedData.length)} className="mb-10 bg-[#009444] text-white font-semibold px-6 py-2 rounded">See All</button>
      </div>
    </div>
  );
};

export default Donation;
