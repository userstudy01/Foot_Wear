import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import HomePage from "./components/HomePage";
import Signin from "./components/Signin";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import NewsletterPopup from "./components/NewsletterPopup";
import SignUp from "./components/Signup/SignUp";
import Produc_tDetails from "./components/Produc_tDetails";
import Aboutus from "./Pages/Aboutus";
import Contact_US from "./components/Contact_US";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import ProductsDetails from "./components/ProductsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/newslatter" element={<NewsletterPopup />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/product/:id" element={<Produc_tDetails />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contact_US />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/allproduct" element={<ProductsDetails />} />
        {/* <Route path="/productdetils" element={<Produc_tDetails />} /> */}
        {/* <Route path="/productdetiles" element={<ProductD />} /> */}
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
