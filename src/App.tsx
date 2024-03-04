import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
const  App = () => {
    return ( 
        <div className="container">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element = {< Home/>}/>
                <Route path="/" element = {< Cart/>}/>
            </Routes>
        </Router>
        </div>
        );
}

export default App;
