import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./pages/Category/Categories";
import ProductDetails from "./pages/Productdetails/ProductDetails";
import FilterdProductItem from "./components/Filterdproductitem/Filterdproductitem";
const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
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
            <Route path={`/products/:id/*`} element={<ProductDetails />} />
            <Route path="/Categories/" element={<Categories />} />
            <Route path="/Categories/:id" element={<FilterdProductItem />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </QueryClientProvider>
  );
};

export default App;
