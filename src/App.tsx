import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./pages/Category/Categories";
const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="App ">
        <Router>
          <Offer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/signup"  element={}> */}
            <Route path="/Categories" element={<Categories />}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    </QueryClientProvider>
  );
};

export default App;
