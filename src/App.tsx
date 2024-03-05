import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Navbar/Offer";
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
      </Router>
    </div>
  );
};

export default App;
