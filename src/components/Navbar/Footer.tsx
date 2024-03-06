import Logo from "../../assets/images/logo.svg";
import visa from "../../assets/images/visa.png";
import google from "../../assets/images/google-pay.png";
import paypal from "../../assets/images/paybal.png";
import apple from "../../assets/images/apple-pay.png";
import masterCard from "../../assets/images/Badge.png";


import { LuFacebook ,LuGithub , LuInstagram ,LuTwitter,  } from "react-icons/lu";
export const Footer = ()=>{
    return(
        <footer className="bg-whitedark px-14 py-6 ">
            <div className="grid grid-cols-2 gap-20 px-4 py-6 lg:py-28  md:grid-cols-5">

            <ul>
                <img src={Logo} alt="Logo" className="pb-10"></img>
                <li className="navbar-item pb-2">We have clothes that suits your style and which you’re proud to wear. From
                    <span className="block">women to men.</span></li>

                    <ul className="flex pt-10 text-2xl ">
                        <LuFacebook className="mr-3 p-1 bg-white border border-solid border-gray-300 rounded-full text-secondory hover:bg-secondory hover:text-primary hover:border-solid hover:border-black hover:rounded-full"/>
                        <LuGithub className="mr-3 p-1 bg-white border border-solid border-gray-300 rounded-full text-secondory hover:bg-secondory hover:text-primary hover:border-solid hover:border-black hover:rounded-full"/>
                        <LuInstagram className="mr-3 p-1 bg-white border border-solid border-gray-300 rounded-full text-secondory hover:bg-secondory hover:text-primary hover:border-solid hover:border-black hover:rounded-full"/>
                        <LuTwitter className="mr-3 p-1 bg-white border border-solid border-gray-300 rounded-full text-secondory hover:bg-secondory hover:text-primary hover:border-solid hover:border-black hover:rounded-full"/>
                </ul>
            </ul>
            <ul>
                <h3 className="pb-10 font-satoshi500">COMPANY</h3>
                <li className="navbar-item pb-5">About</li>
                <li className="navbar-item pb-5">Feature</li>
                <li className="navbar-item pb-5">Works</li>
                <li className="navbar-item pb-5">Career</li>
            </ul>
            <ul>
                <h3 className="pb-10 font-satoshi500">Help</h3>
                <li className="navbar-item pb-5">Customer Support</li>
                <li className="navbar-item pb-5">Privacy Policy</li>
                <li className="navbar-item pb-5">Terms & Conditions</li>
                <li className="navbar-item pb-5">Delivery Details</li>
            </ul>
            <ul>
                <h3 className="pb-10 font-satoshi500">FAQ</h3>
                <li className="navbar-item pb-5">Account</li>
                <li className="navbar-item pb-5">Manage Deliveries</li>
                <li className="navbar-item pb-5">Orders</li>
                <li className="navbar-item pb-5">Payments</li>
                </ul>
            <ul>
                <h3 className="pb-10 font-satoshi500">RESOURES</h3>
                <li className="navbar-item pb-5">Free eBooks</li>
                <li className="navbar-item pb-5">Development Tutorial</li>
                <li className="navbar-item pb-5">How to - Blog</li>
                <li className="navbar-item pb-5">Youtube Playlist</li>   
            </ul>
            </div>

            <hr className="border-2 mb-7"/>

            <div className="flex justify-between items-center">
                    <h3>Shop.co © 2000-2023, All Rights Reserved</h3>
                    <div className="flex">
                        <img src={visa} alt="" ></img>
                        <img src={masterCard} alt=""></img>
                        <img src={paypal} alt="" ></img>
                        <img src={apple} alt="" ></img>
                        <img src={google}alt="" ></img>
                        <img src={"../../assets/images/apple-pay.png"}alt="" ></img>
                    </div>
            </div>
            
        </footer>
    )
}

export default Footer;
