import React from "react";
import { Link } from "react-router-dom";

interface navLink {
  link: string;
  icon?:React.ReactNode;
  className: string;
  children?: React.ReactNode;

}
const Navitems = (props: navLink) => {
  return (
    <li className="list-none">
      <Link to={"/"} className={props.className}>
        {props.link}
        {props.icon}
      </Link>
      {props.children}
    </li>
  );
};

export default Navitems;
