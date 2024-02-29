/* eslint-disable react/prop-types */
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  // Check if product is available
  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };
  if (!product) {
    return null; // Return null or any placeholder when product is missing
  }

  // Destructure product object to access its properties
  const { title, image, rating, price, id, description } = product;

  return (
    <div
      className={`${classes.card_conatiner} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h2>{title}</h2>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
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
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
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
    flex: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number,
    link: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
