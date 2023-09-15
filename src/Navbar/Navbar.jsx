import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
export default function Navbar() {
  const [toggle, setToogle] = useState(false);
  return (
    <>
     
        <nav className=" bg-[#FBFBFD] h-[60px] w-full flex items-center justify-around">
          <div className=" text-[#2245E3] text-center  w-[79px] font-bold text-3xl font-mono capitalize">
            Landing
          </div>
          <div className=" space-x-7 flex items-center justify-center">
            <ul className=" hidden space-x-7 lg:flex items-center justify-center">
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="flex items-center justify-center">
              <button className="hidden lg:block bg-[#111B47] rounded-sm outline-none font-semibold text-white py-1 px-3 text-[18px] ">
                Purchase UI Kit
              </button>
              {toggle ? (
                <AiOutlineMenuFold
                  onClick={() => setToogle(!toggle)}
                  className=" block lg:hidden text-3xl"
                />
              ) : (
                <AiOutlineMenuUnfold
                  onClick={() => setToogle(!toggle)}
                  className=" block lg:hidden text-3xl"
                />
              )}
            </div>
          </div>
        </nav>
        <ul
          className={` duration-150 pt-5 lg:hidden block  bg-gray-200 w-full h-screen space-y-7 fixed ${
            toggle ? "left-0" : "left-[-100%]"
          } 
text-center`}
        >
          <li>
            <a
              className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[26px] "
              href="@"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[26px] "
              href="@"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[26px] "
              href="@"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[26px] "
              href="@"
            >
              Contact
            </a>
          </li>
          <button className=" bg-[#111B47] rounded-sm outline-none font-semibold text-white py-1 px-3 text-[18px] ">
            Purchase UI Kit
          </button>
        </ul>
     
    </>
  );
}

export function Btn2Nav() {
  return (
    <>
      <div>
        <nav className=" bg-[#FBFBFD] h-[60px] w-full  flex items-center justify-around">
          <div className=" text-[#2245E3] text-center h-[38px] w-[79px] font-bold text-xl font-mono capitalize">
            Landing
          </div>
          <div className=" space-x-7 flex items-center justify-center">
            <ul className=" space-x-7 flex items-center justify-center">
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]"
                  href="@"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className=" space-x-4">
              <button className=" bg-[#111B47] rounded-sm outline-none font-semibold text-white py-1 px-3 text-[18px] ">
                Purchase UI Kit
              </button>
              <button className=" bg-[#FFD166] rounded-sm outline-none font-semibold text-black py-1 px-3 text-[18px] w-[160px] ">
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
