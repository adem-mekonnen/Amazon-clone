import { CategoryData } from "./CategoryData";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
const Category = () => {
  return (
    <section className={classes.category_container}>
      {CategoryData.map((info) => (
        <CategoryCard key={info.id} data={info} />
      ))}
    </section>
  );
};

export default Category;
