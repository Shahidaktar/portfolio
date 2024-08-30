"use client";

import ParticleContainer from "@/components/Particles";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/ModelProvider";
import { skills } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  buttoninitial: {
    opacity: 0,
  },
  buttonanimate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <>
      <ParticleContainer />
      <section className="bg-[#111] pb-8" id="about">
        <div className="flex flex-col justify-between h-screen">
          <div className="flex -mt-10 relative justify-center">
            <div className="flex items-center justify-between">
              <img
                src="logo.png"
                alt="logo"
                className="opacity-10 md:h-[50rem]"
              />

              <motion.div
                className="absolute left-[10%] md:left-[15%]"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h1
                  className="pointer-events-none text-xl md:text-4xl font-poppins mr-12 text-indigo-400 pb-2 tracking-widest"
                  variants={textVariants}
                >
                  SHAHID AKTAR MANDAL
                </motion.h1>
                <motion.h4
                  className="pointer-events-none text-lg md:text-xl italic my-4 md:my-8 text-gray-200 pb-2 "
                  variants={textVariants}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "FRONTEND DEVELOPER",
                        "FULL STACK DEVELOPER",
                        "ML ENTHUSIAST",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </motion.h4>

                <Modal>
                  <div className="flex md:block space-x-2 relative">
                    <ModalTrigger className="bg-[#4595eb] py-2 px-3 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
                      ABOUT ME
                    </ModalTrigger>
                  </div>

                  <ModalBody>
                    <ModalContent>
                      <h4 className="text-lg md:text-2xl text-blue-500 dark:text-blue-500 font-bold text-center mb-8">
                        ABOUT ME
                      </h4>
                      <div className="flex items-center space-x-3 justify-center">
                        <img
                          src={"/profile.png"}
                          alt="shahid"
                          width={180}
                          height={180}
                          className="flex-none rounded-full bg-sky-200  mb-3 border border-blue-400"
                        />

                        <h1 className="hidden md:block text-gray-300">
                          Full Stack Developer with a proven track record in
                          hackathons and a diverse skill set in JavaScript,
                          Java, and Python. Passionate about leveraging
                          technology for real-world impact and eager to
                          collaborate on innovative projects.
                        </h1>
                      </div>

                      <h4 className="text-lg md:text-2xl text-blue-500 dark:text-blue-500 font-bold text-center my-4">
                        SKILLS
                      </h4>
                      <div className="py-4 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start  mx-auto w-full">
                        <AnimatedTooltip items={skills} />
                      </div>
                    </ModalContent>
                  </ModalBody>
                </Modal>
                <motion.img
                  src="/icons/scroll.png"
                  alt="scroll"
                  variants={textVariants}
                  animate="scrollButton"
                  className="my-4 md:my-8 h-14 w-14"
                />
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center h-screen"
              variants={textVariants}
              initial="buttoninitial"
              animate="buttonanimate"
            >
              <motion.ul
                className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8"
                variants={textVariants}
              >
                <motion.li variants={textVariants}>
                  <a
                    href="https://www.instagram.com/mr_shahid_aktar"
                    target="_blank"
                  >
                    <FaInstagram className="h-8 w-8 md:h-9 md:w-9 text-indigo-200" />
                  </a>
                </motion.li>
                <motion.li variants={textVariants}>
                  <a
                    href="https://www.facebook.com/sahid.akter.526"
                    target="_blank"
                  >
                    <FaFacebookF className="h-8 w-8 md:h-9 md:w-9 text-indigo-200 hover:text-indigo-100" />
                  </a>
                </motion.li>
                <motion.li variants={textVariants}>
                  <a href="https://github.com/Shahidaktar" target="_blank">
                    <FaGithub className="h-8 w-8 md:h-9 md:w-9 text-indigo-200 hover:text-indigo-100" />
                  </a>
                </motion.li>
                <motion.li variants={textVariants}>
                  <a
                    href="https://www.linkedin.com/in/shahid-aktar-mandal-331872292"
                    target="_blank"
                  >
                    <FaLinkedinIn className="h-8 w-8 md:h-9 md:w-9 text-indigo-200 hover:text-indigo-100" />
                  </a>
                </motion.li>
                <motion.li variants={textVariants}>
                  <Link href="/resume.pdf" target="_blank">
                    <IoDocumentTextOutline className="h-8 w-8 md:h-9 md:w-9 text-indigo-200 hover:text-indigo-100" />
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
