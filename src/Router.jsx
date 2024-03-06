import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Pages/Landing/Landing";

import Payment from "./components/Pages/Payment/Payment";
import Orders from "./components/Pages/Orders/Orders";
import Cart from "./components/Pages/Cart/Cart";
import Result from "./components/Pages/Results/Result";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import Auth from "./components/Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
//  "pk_test_51OqXBVLKO1LsU9Xf1ZWxX9GxI5z63vlLDbnML6bZu231izg4jXzUFlQqR1UvKneaw7t8c6G31McNdkQQM6xCVriX00coxRo0xt";
const Routing = () => {
  const stripePromise = loadStripe(
    "pk_test_51OqxYzCZtkcynDAjHYsfgJN2izVdZzID1iEimRmtM6UuIhLE1QEVUo1MSiHpEaN2kbUK52C9r4iwzFwSsYYHkg1X00kqYhlJdL"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
