import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { Cart } from "./pages/Cart.js";
import { Navbar } from "./components/Navbar.js";
const  App = () => {
    return ( 
        <div className="container">

            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;