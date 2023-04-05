import React from "react";
import FooterNavs from "./FooterNavs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer--in">
          <p>Nigeria</p>
        </div>
        <hr></hr>
        <div>
          <FooterNavs />
        </div>
      </div>
    </>
  );
};

export default Footer;
