import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./pages/Category/Categories";
import ProductDetails from "./pages/Productdetails/ProductDetails";
import FilterdProductItem from "./components/Filterdproductitem/Filterdproductitem";
import store from "./store/store";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <div className="App">
          <Router>
            <Offer />
            <Navbar />
            <Routes>
              <Route path="/shop.co" element={<Home />} />
              <Route path="/shop.co/cart" element={<Cart />} />
              {/* <Route path="/signup"  element={}> */}
              <Route
                path={`/shop.co/products/:id/*`}
                element={<ProductDetails />}
              />
              <Route path="/shop.co/Categories/" element={<Categories />} />
              <Route
                path="/shop.co/Categories/:id"
                element={<FilterdProductItem />}
              />
            </Routes>
            <Footer />
          </Router>
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
