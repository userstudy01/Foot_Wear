import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import HomePage from "./components/HomePage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import NewsletterPopup from "./components/NewsletterPopup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newslatter" element={<NewsletterPopup />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
