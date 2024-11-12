import React from "react";
import { Link, useLocation } from "react-router-dom";
// button in the navbar
const NavbarLink = (props) => {
  const path = useLocation().pathname;
  return (
    <Link
      to={props.to}
      className={`hs-collapse-toggle lg:hover:text-ted transition-colors ${
        path === props.to ? "lg:text-ted bg-main text-main" : ""
      } flex justify-center items-center lg:px-4 max-md:h-[6vh]`}
    >
      <p className="text-center leading-5">{props.children}</p>
    </Link>
  );
};

export default NavbarLink;
