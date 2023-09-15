import React from "react";
import Heading1 from "./Heading/Heading1";
import Heading2 from "./Heading/Heading2";
import Heading3 from "./Heading/Heading3";
import Img3 from "../../Images/svg3.svg";
import Img4 from "../../Images/svg4.svg";
import Img5 from "../../Images/svg5.svg";
import Footer from "./Heading/Footer";
import Product from "../../Navbar/Product";

export default function Header() {
  return (
    <>
      <div>
        <div className=" space-y-10">
          <Heading1 />
          <Heading2 />
          {/* <Product/> */}
          <Heading3 titleText="Light, Fast & Powerfull" Img3={Img3} />
          <Heading3 titleText="Fast & Powerfull" Img3={Img4} />
          <Heading3 titleText="Light Powerfull" Img3={Img5} />
          <Footer />
        </div>
      </div>
    </>
  );
}
