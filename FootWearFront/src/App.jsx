import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import HomePage from "./components/HomePage";
import Signin from "./components/Signin";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import NewsletterPopup from "./components/NewsletterPopup";
import SignUp from "./components/Signup/SignUp";
import Aboutus from "./Pages/Aboutus";
import Contact_US from "./components/Contact_US";
import Blog from "./components/Blog";
import CartPage from "./components/CartPage";
import AllProduct from "./components/AllProduct";
import NewBlogDetails from "./components/NewBlogDetails";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/header" element={<Header />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/newslatter" element={<NewsletterPopup />} />

        <Route path="/aboutus" element={<Aboutus />} />

        <Route path="/contactus" element={<Contact_US />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/allproduct" element={<AllProduct />} />

        <Route path="/Blog" element={<Blog />} />

        <Route path="/BlogDetails/:id" element={<NewBlogDetails />} />

        <Route path="/productdetails" element={<ProductDetails />} />

      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
