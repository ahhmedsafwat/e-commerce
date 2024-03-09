import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Hero/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App ">
      <Router>
        <Offer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/signup"  element={}> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
