import Layout from "../../Layout/Layout";
import Carousels from "../../Carousel/Carousels";
import Category from "../../Category/Category";
import Product from "../../Product/Product";
const Landing = () => {
  return (
    <Layout>
      <Carousels />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
