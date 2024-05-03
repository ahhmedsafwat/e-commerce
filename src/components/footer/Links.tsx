import { Link } from "react-router-dom";
import { LuFacebook, LuGithub, LuInstagram, LuTwitter } from "react-icons/lu";
import Logo from "../../assets/images/logo.svg";

const Links = () => {
  return (
    <div className="medium:mb-4 small:col-span-full ">
      <Link to={"/shop.co"} className="mb-10 block ">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <p className="w-60 text-sm text-gray-600 font-satoshireguler text-wrap ">
        We have clothes that suits your style and which you’re proud to wear.
        From women to men.
      </p>

      <ul className="flex pt-14 text-2xl ">
        <li className="social-box group">
          <LuFacebook className="social-icon  group-hover:stroke-0  " />
        </li>
        <li className="social-box group">
          <LuGithub className="social-icon  group-hover:stroke-0 " />
        </li>
        <li className="social-box group transition ">
          <LuInstagram className="social-icon " />
        </li>
        <li className="social-box group">
          <LuTwitter className="social-icon  group-hover:stroke-0 " />
        </li>
      </ul>
    </div>
  );
};

export default Links;
