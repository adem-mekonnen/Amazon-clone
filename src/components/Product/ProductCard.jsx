import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  // Check if product is available
  if (!product) {
    return null; // Return null or any placeholder when product is missing
  }

  // Destructure product object to access its properties
  const { title, image, rating, price, id } = product;

  return (
    <div className={`${classes.card_conatiner}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h2>{title}</h2>
        <div className={`${classes.rating}`}>
          {/* Render Rating component if rating is available */}
          {rating && <Rating value={rating.rate} precision={0.1} />}
          {/* count */}
          <small>{rating && rating.count}</small>{" "}
          {/* Added null check for rating.count */}
        </div>
        {/* Render price if available */}
        <div>
          {price && <CurrencyFormat amount={price} />}{" "}
          {/* Added null check for price */}
        </div>
        <button className={`${classes.button}`}>add to cart</button>
      </div>
    </div>
  );
};

// Prop type validation for product prop
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number,
    link: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
