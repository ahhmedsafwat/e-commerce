import { Link } from "react-router-dom";
import { LuFacebook, LuGithub, LuInstagram, LuTwitter } from "react-icons/lu";
import Logo from "../../assets/images/logo.svg";

const Links = () => {
  return (
    <div className="min-w-40 xl: grid xl:col-span-full">
      <Link to={"/"}>
        <img className="pb-10" src={Logo} alt="Logo"></img>
      </Link>
      <p className="w-60 2xl:text-sm text-gray-600 font-satoshireguler xl:text-lg">
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
