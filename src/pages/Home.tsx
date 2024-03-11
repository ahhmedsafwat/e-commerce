// import { useState } from "react";
import Hero from "./Hero/Hero";
import FirstSection from "./Section/Section1";

import Axios from 'axios';

const Home = () => {
    // const [data, setData] = useState()
    Axios.get('https://fakestoreapi.com/products/1').then((res)=>{
        console.log(res.data)
    })
    return ( 
        <div>
            <Hero/>
            <FirstSection/>
            
        </div>
    );
}

export default Home;