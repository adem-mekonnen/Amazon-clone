import PropTypes from "prop-types";
import classes from "./Category.module.css";
const CategoryCard = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="shop info" />
        <p>Shop now</p>
      </a>
    </div>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
