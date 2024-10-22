import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "../Pages/Auth/Signup";
import SignIn from "../Pages/Auth/Signin";
import Auth from "../Pages/Auth/Auth";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Product from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Carts from "../Pages/Carts";
import Orders from "../Pages/orders";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* auth parent route */}
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
          {/* auth ke elawa */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;