import React from "react";
import { Link } from "react-router-dom";

interface navLink {
  link: string;
  icon?:React.ReactNode;
  className: string;
  children?: React.ReactNode;
  onClick?: ()=>void
}
const Navitems = (props: navLink) => {
  return (
    <li className="list-none p-2 relative">
      <Link to={"/"} className={props.className} onClick={props.onClick}>
        {props.link}
        {props.icon}
      </Link>
      {props.children}
    </li>
  );
};

export default Navitems;
