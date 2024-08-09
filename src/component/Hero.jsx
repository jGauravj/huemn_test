import { useEffect, useState } from "react";
import Logo from "../assets/chromeLogo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
// import { MdOutlineSpeed } from "react-icons/md";

const letterPullupVariant = {
  initial: { y: 100, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  exit: { y: -100, opacity: 0 },
};

const wordFadeInVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0 },
};

const Hero = () => {
  const words = [
    { text: "fast", color: "text-green-700", bgColor: "bg-green-100" },
    { text: "safe", color: "text-blue-700", bgColor: "bg-blue-100" },
    { text: "yours", color: "text-red-700", bgColor: "bg-red-100" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={index} className=" mt-10">
      <div className="flex flex-col w-full items-center">
        <img src={Logo} alt="logo" width={65} height={65} />
        <h1 className="text-[4.5rem] leading-[1.2]  text-center font-bold text-[#202124]">
          The browser
        </h1>
        <div className="flex gap-4">
          <h1 className="text-[4.5rem] leading-[1.2]  text-center font-bold text-[#202124]">
            built to be
          </h1>
          <div className="flex overflow-hidden ">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[index].text}
                variants={wordFadeInVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`flex items-center justify-center rounded-full px-14 ${words[index].bgColor}`}
              >
                {words[index].text.split("").map((letter, i) => (
                  <motion.span
                    key={`${words[index].text}-${i}`}
                    variants={letterPullupVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={i}
                    className={`text-[55px]  font-semibold ${words[index].color}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-8">
          <button
            id="download-button"
            className=" flex text-lg rounded-full text-white font-semibold items-center gap-2 px-10 py-5 bg-[#1a73e8]"
          >
            <MdOutlineFileDownload size={25} />
            Download Chrome
          </button>
        </div>
        <div className="mt-5 flex flex-col text-center gap-5 ">
          <p className="text-[#1967d2] font-medium ">i want to update Chrome</p>
          <p className="text-xs text-[#5f6368]">For Windows 11/10 64-bit.</p>
        </div>
        <div className="flex justify-center w-[500px] items-center gap-3 mt-5">
          <input type="checkbox" id="checkbox" className=" checked: h-6 w-6 " />
          <label htmlFor="checkbox" className="text-xs text-[#5f6368]">
            Help make Google Chrome better by automatically sending usage
            statistics and crash reports to Google.{" "}
            <span className="text-[#1967d2]">Learn more</span>
          </label>
        </div>
        <div className="w-[500px] text-center mt-5">
          <p className="text-xs text-[#5f6368]">
            By downloading Chrome, you agree to the{" "}
            <span className="text-[#1967d2]">Google Terms of Service</span> and
            Chrome and{" "}
            <span className="text-[#1967d2]">
              ChromeOS Additional Terms of Service
            </span>{" "}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
