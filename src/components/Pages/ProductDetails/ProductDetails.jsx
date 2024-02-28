import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductUrl } from "../../../Api/endPoints";
import axios from "axios";
import Layout from "../../Layout/Layout";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loder";
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
};

export default ProductDetails;
