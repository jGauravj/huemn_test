import { useEffect, useState } from "react";
import logo from "../assets/chromeLogo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const featuresData = [
  { lable: "Overview", link: "#" },
  { lable: "Google address bar", link: "#" },
  { lable: "Password check", link: "#" },
  { lable: "Use across devices", link: "#" },
  { lable: "Dark Mode", link: "#" },
  { lable: "Tabs", link: "#" },
  { lable: "Articles for you", link: "#" },
  { lable: "Extensions", link: "#" },
];

const support = [
  { lable: "Helpful tips for Chrome", link: "#" },
  { lable: "Support", link: "#" },
];



const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [showTabBar, setShowTabBar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const downloadButton = document.getElementById("download-button");
      const rect = downloadButton?.getBoundingClientRect();
      const isScrollingUp = prevScrollPos > currentScrollPos;

      // Hide Navbar when download button touches the top
      setHideNavbar(rect ? rect.top <= 0 : false);

      // Show the tab bar when the main navbar is hidden and scrolling down
      if (!isScrollingUp && rect && rect.top <= 0) {
        setShowTabBar(true);
      }

      // Show the main navbar when scrolling up
      if (isScrollingUp) {
        setHideNavbar(false);
      }

      // Hide the tab bar when the download button is visible
      if (rect && rect.top > 0) {
        setShowTabBar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div
        className={`sticky z-50 top-0 transition-transform duration-300 bg-white ${
          hideNavbar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex gap-5 border-b shadow-md">
          <div className="flex items-center py-4 px-5 gap-2 cursor-pointer">
            <img src={logo} width={35} height={35} alt="logo" />
            <h1 className="text-[24px] font-normal text-[#72757A]">chrome</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex">
              <li className="cursor-pointer px-3 py-3 hover:bg-[#F8F9FA] transition-all ease-linear rounded-md font-medium text-[#5f6368] hover:text-[#202124]">
                Home
              </li>
              <li className="cursor-pointer px-3 py-3 hover:bg-[#F8F9FA] transition-all ease-linear rounded-md font-medium text-[#5f6368] hover:text-[#202124]">
                The Browser by Google
              </li>
            </ul>
            <div className="cursor-pointer relative group">
              <p className="flex items-center gap-1 px-3 py-3 hover:bg-[#F8F9FA] transition-all ease-linear rounded-md font-medium text-[#5f6368] hover:text-[#202124]">
                Features <MdKeyboardArrowDown />
              </p>
              <div className="absolute left-0 top-12 hidden w-[195px] flex-col rounded-tl-none rounded-lg bg-white p-3 shadow-md border group-hover:flex transition-all ease-linear">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="hover:bg-[#F8F9FA] transition-all ease-linear p-3 w-full rounded-md"
                  >
                    <h1 className="font-medium text-[#5f6368] hover:text-[#202124]">
                      {feature.lable}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="cursor-pointer relative group ">
              <p className="flex items-center gap-1 px-3 py-3 hover:bg-[#F8F9FA] transition-all ease-linear rounded-md font-medium text-[#5f6368] hover:text-[#202124]">
                Support <MdKeyboardArrowDown />
              </p>
              <div className="absolute left-0 top-12 hidden w-[225px] flex-col rounded-tl-none rounded-lg bg-white p-3 shadow-md border group-hover:flex transition-all ease-linear">
                {support.map((support, index) => (
                  <div
                    key={index}
                    className="hover:bg-[#F8F9FA] transition-all ease-linear p-3 w-full rounded-md"
                  >
                    <h1 className="flex items-center gap-1 font-medium text-[#5f6368] hover:text-[#202124]">
                      {support.lable}{" "}
                      {support.lable === "Support" && (
                        <IoIosArrowRoundUp className="rotate-45" size={20} />
                      )}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Tab Bar */}
      {showTabBar && (
        <div
          className={`fixed z-50 flex gap-3 p-2 bg-white rounded-full shadow-md border left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-out ${
            hideNavbar ? "top-5" : "top-24"
          }`}
        >
          <ul className="flex gap-1 items-center">
            <li className=" cursor-pointer hover:bg-[#f1f3f4] px-5 py-2 rounded-full font-semibold text-[#5f6368] ">
              <a href="#GG">Fast</a>
            </li>
            <li className=" cursor-pointer hover:bg-[#f1f3f4] px-5 py-2 rounded-full font-semibold text-[#5f6368] ">
              Safe
            </li>
            <li className=" cursor-pointer hover:bg-[#f1f3f4] px-5 py-2 rounded-full font-semibold text-[#5f6368] ">
              Yours
            </li>
            <li className=" cursor-pointer hover:bg-[#f1f3f4] px-5 py-2 rounded-full font-semibold text-[#5f6368] ">
              ByGoogle
            </li>
          </ul>
          <button className="text-white font-semibold bg-[#1a73e8] px-4 py-2 rounded-full flex items-center gap-2">
            <MdOutlineFileDownload size={20} />
            Download
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
