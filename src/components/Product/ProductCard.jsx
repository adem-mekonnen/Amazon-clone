import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
const ProductCard = ({ product }) => {
  // Check if product is available
  if (!product) {
    return null; // Return null or any placeholder when product is missing
  }

  // Destructure product object to access its properties
  const { title, image, rating, price, link } = product;

  return (
    <div className={`${classes.card_conatiner}`}>
      <a href={link}>
        <img src={image} alt={title} />
      </a>
      <div>
        <h2>{title}</h2>
        <div className={`${classes.rating}`}>
          {/* Render Rating component if rating is available */}
          {rating && <Rating value={rating.rate} precision={0.1} />}
          {/* count */}
          <small>{rating.count}</small>
        </div>
        {/* Render price if available */}
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={`${classes.button}`}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
