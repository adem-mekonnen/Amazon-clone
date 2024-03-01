import PropTypes from "prop-types";
import { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
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
    return null;
  }

  const { title, image, rating, price, id, description, link } = product;

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
          {rating && <Rating value={rating.rate} precision={0.1} />}
          <small>{rating && rating.count}</small>
        </div>
        <div>{price && <CurrencyFormat amount={price} />}</div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number,
    link: PropTypes.string, // Make link prop optional
  }),
  flex: PropTypes.bool.isRequired,
  renderDesc: PropTypes.bool,
  renderAdd: PropTypes.bool,
};

export default ProductCard;
