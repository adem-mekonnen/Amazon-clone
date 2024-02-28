import { CategoryData } from "./CategoryData";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
const Category = () => {
  return (
    <section className={classes.category__container}>
      {CategoryData.map((infos) => (
        <CategoryCard key={infos.imgLink} data={infos} />
      ))}
    </section>
  );
};

export default Category;
