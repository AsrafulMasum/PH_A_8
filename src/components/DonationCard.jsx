import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({ card }) => {
  const {
    id,
    card_bg_color,
    image,
    category_bg_color,
    text_button_bg_color,
    category,
    name,
  } = card || {};
  return (
    <NavLink
      to={`/donation-details/${id}`}
      className="rounded-lg"
      style={{
        backgroundColor: `${card_bg_color}`,
      }}
    >
      <div className="lg:h-56">
        <img className="rounded-t-lg w-full h-full object-cover" src={image} alt="Image" />
      </div>
      <div
        className="m-4 inline-block px-4 py-1 rounded-md"
        style={{
          backgroundColor: `${category_bg_color}`,
          color: `${text_button_bg_color}`,
        }}
      >
        <h4 className="text-sm font-medium">{category}</h4>
      </div>
      <h2
        className="px-4 pb-4 font-semibold text-lg"
        style={{
          color: `${text_button_bg_color}`,
        }}
      >
        {name}
      </h2>
    </NavLink>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default DonationCard;
