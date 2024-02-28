import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Pages/Landing/Landing";
import Signup from "./components/Pages/Auth/Signup";
import Payment from "./components/Pages/Payment/Payment";
import Orders from "./components/Pages/Orders/Orders";
import Cart from "./components/Pages/Cart/Cart";
import Result from "./components/Pages/Results/Result";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
