import './banner.css'
import PropTypes from 'prop-types';
const Banner = ({handleSearch}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    handleSearch(searchValue)
    e.target.search.value = ''
  }

  return (
    <div>
      <section className="h-[58vh] flex flex-col justify-center text-center lg:-mt-28">
        <h2 className="text-[#0B0B0B] font-bold text-4xl pb-10 opacity-95">I Grow By Helping People In Need</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input className="w-1/3 h-12 border-[1px] p-4 rounded-l-lg outline-none border-none" type="text" name='search' placeholder="Search here...."/>
            <input className="h-12 w-24 -ml-1 bg-[#FF444A] rounded-r-lg text-white cursor-pointer" type="submit" value="Search" />
          </form>
        </div>
      </section>
    </div>
  );
};

Banner.propTypes = {
  handleSearch : PropTypes.func.isRequired
}

export default Banner;