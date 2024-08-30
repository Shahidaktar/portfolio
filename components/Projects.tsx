"use client";
import { projects } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/PinContainer";
const variants = {
  initial: {
    x: 200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      id="projects"
      className="mb-20"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      whileInView={{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      }}
    >
      <motion.span
        variants={variants}
        className="heading rounded-lg font-poppins flex items-center justify-center border border-cyan-500 text-cyan-500 p-4 mt-12 w-fit mx-auto"
      >
        Projects
      </motion.span>
      <motion.div
        variants={variants}
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 md:mt-5"
      >
        {projects.map((item) => (
          <motion.div
            variants={variants}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.about} href={item.githubLink}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#FFFF" }}
                ></div>
                <img
                  src={item.img}
                  alt="cover"
                  height={150}
                  width={150}
                  className="absolute l-[50%]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1">
                {item.title}
              </h1>

              <div className="flex items-center pt-1">
                {item.iconLists?.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full shadow-xl  lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <a
                    className="flex lg:text-xl md:text-lg text-base text-purple"
                    href={item.githubLink}
                    target="_blank"
                  >
                    GitHub Link
                  </a>
                  <FaGithub className="ms-3 text-black" />
                </div>
                {item.liveLink && (
                  <div className="flex justify-center items-center">
                    <a
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                      href={item.liveLink}
                      target="_blank"
                    >
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3 text-cyan-600" />
                  </div>
                )}
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
