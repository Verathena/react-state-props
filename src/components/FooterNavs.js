import React from "react";
import carbonIcon from "../assets/carbon-icon.PNG";
import Navigations from "./Navigations";

const FooterNavs = () => {
  return (
    <>
    <div className="footerNav">
        <div className="left">
        <Navigations navItem={"About"} />
        <Navigations navItem={"Advertising"} />
        <Navigations navItem={"Business"} />
        <Navigations navItem={"How Search works"} />
      </div>
      <div className="center">
        <img src={carbonIcon} alt="carbon Icon" />
        <span>
          <a href="#">Carbon neutral since 2007</a>
        </span>
      </div>
      <div className="right">
        <Navigations navItem={"Privacy"} />
        <Navigations navItem={"Terms"} />
        <Navigations navItem={"Settings"} />
      </div>
      </div>
    </>
  );
};

export default FooterNavs;
