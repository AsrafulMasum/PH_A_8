import './banner.css'
const Banner = () => {
  return (
    <div>
      <section className="h-[70vh] flex flex-col justify-center text-center lg:-mt-24">
        <h2 className="text-[#0B0B0B] font-bold text-4xl pb-10 opacity-95">I Grow By Helping People In Need</h2>
        <div>
          <input className="w-1/3 h-12 border-[1px] p-4 rounded-l-lg outline-none" type="text" placeholder="Search here...."/>
          <button className="h-12 w-24 bg-[#FF444A] rounded-r-lg text-white">Search</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;