import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdOutlineSpeed } from "react-icons/md";
import chromeVideo from "../assets/non-chrome.webm";

const VideoSection = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 0.6 ], [0, 400]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.8]);
  const videoX = useTransform(scrollYProgress, [0.7, 0.8], ["0%", "-25%"]);

  // New transform for bottom left movement
  const videoBottomLeftY = useTransform(scrollYProgress, [0.5, 1], [400, 600]); // Adjust values as needed

  return (
    <div className="flex justify-center">
      <div className="relative flex items-center flex-col min-w-[85%] max-w-[85%] min-h-[200vh]">
        <div className="mt-20" ref={textRef}>
          <h1 className="text-[#202124] font-bold text-[3.75rem] text-center" id="GG">
            The{" "}
            <span className="inline-flex items-center text-green-700 bg-green-100 text-[52px] px-4 font-semibold rounded-full">
              <MdOutlineSpeed size={50} className="mr-2" />
              fast
            </span>{" "}
            way to do <br /> things online
          </h1>
        </div>
        <motion.div
          style={{
            y: scrollYProgress > 0.8 ? videoBottomLeftY : videoY, // Conditional y value
            scale: videoScale,
            x: videoX,
          }}
          className="absolute transform mt-10 w-[65%]"
        >
          <video src={chromeVideo} className="w-full h-auto"></video>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
