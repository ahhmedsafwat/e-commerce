// import { useState } from "react";
import Hero from "./Hero/Hero";
import Brands from "../components/Brands/Brands";

// import Axios from "axios";

const Home = () => {
  // const [data, setData] = useState()
  // Axios.get('https://fakestoreapi.com/products/1').then((res)=>{
  //     console.log(res.data)
  // })
  return (
    <div>
      <Hero />
      <Brands />
    </div>
  );
};

export default Home;
