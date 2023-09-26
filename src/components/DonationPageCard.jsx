import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const DonationPageCard = ({ data }) => {
  const {
    id,
    card_bg_color,
    image,
    category_bg_color,
    text_button_bg_color,
    category,
    name,
    price,
  } = data || {};
  const displayPrice = price.toFixed(2);
  return (
    <div
      className="flex rounded-lg"
      style={{
        backgroundColor: `${card_bg_color}`,
      }}
    >
      <div className="lg:h-52 lg:w-56">
        <img
          className="rounded-t-lg h-full w-full object-cover"
          src={image}
          alt="Image"
        />
      </div>
      <div>
        <div
          className="m-4 inline-block px-4 py-1 rounded-md"
          style={{
            backgroundColor: `${category_bg_color}`,
            color: `${text_button_bg_color}`,
          }}
        >
          <h4 className="text-sm font-medium">{category}</h4>
        </div>
        <h2 className="pl-4 pb-2 font-semibold text-lg">{name}</h2>
        <p
          className="pl-4 pb-2 text-lg font-semibold"
          style={{
            color: `${text_button_bg_color}`,
          }}
        >
          ${displayPrice}
        </p>
        <NavLink to={`/donation-details/${id}`}>
          <button
            className="ml-4 py-2 px-6 rounded font-semibold text-white"
            style={{
              backgroundColor: `${text_button_bg_color}`,
            }}
          >
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

DonationPageCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonationPageCard;
