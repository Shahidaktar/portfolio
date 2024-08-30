"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { toast } from "react-toastify";
const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Footer = () => {
  const [name, setName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const sendMail = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          formMail,
          message,
        }),
      });
      const res = await response.json();
      toast.success(res.message, { position: "top-right" });
      setName("");
      setFormMail("");
      setMessage("");
    } catch (error: any) {
      toast.error(error.message, { position: "top-right" });
    }
  };
  return (
    <motion.footer
      className="w-full pb-10"
      id="contact"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          staggerChildren: 0.1,
        },
      }}
      ref={ref}
    >
      <motion.div variants={variants} className="mx-auto max-w-2xl text-center">
        <motion.span
          variants={variants}
          className="heading font-poppins flex items-center justify-center border border-cyan-500 text-cyan-500 p-4 mt-2 w-fit mx-auto rounded-lg"
        >
          {`Let's Connect`}
        </motion.span>
      </motion.div>
      <motion.div variants={variants} className="flex justify-around">
        <motion.img
          variants={variants}
          src={"/images/msg.svg"}
          height={600}
          width={600}
          alt="msg"
          className="hidden md:block"
        />
        <motion.div
          variants={variants}
          className=" isolate bg-white px-6 py-4 sm:py-8 lg:px-8 w-full relative"
        >
          <motion.div
            className="absolute -right-1 bottom-[35%] md:right-[30%]"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg
              width="500px"
              height="500px"
              viewBox="0 0 24 24"
              fill="#0000"
              xmlns="http://www.w3.org/2000/svg"
              className="h-80 w-80 md:h-[500px] md:w-[500px]"
            >
              <motion.path
                d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                stroke="#22d3ee"
                strokeWidth="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
              />
            </svg>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            onSubmit={sendMail}
            className="mx-auto mt-16 max-w-xl md:max-w-2xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-xl font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formMail}
                    onChange={(e) => {
                      setFormMail(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xl font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={10}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-cyan-500 p-4 text-center text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex mt-2  flex-col justify-between items-center"
      >
        <motion.p
          variants={variants}
          className="md:text-lg text-base md:font-normal font-light"
        >
          Copyright © 2024 Shahid Aktar Mandal
        </motion.p>
        <motion.img
          variants={variants}
          src="logo-footer.png"
          alt="logo"
          className=" h-24 w-24"
        />

        <motion.ul variants={variants} className="flex space-x-4">
          <motion.li variants={variants}>
            <a href="https://www.instagram.com/mr_shahid_aktar" target="_blank">
              <FaInstagram className="h-8 w-8 text-cyan-500 hover:text-sky-500" />
            </a>
          </motion.li>
          <motion.li variants={variants}>
            <a href="https://www.facebook.com/sahid.akter.526" target="_blank">
              <FaFacebookF className="h-8 w-8 md:w-10 text-cyan-500 hover:text-sky-500" />
            </a>
          </motion.li>
          <motion.li variants={variants}>
            {" "}
            <a href="https://github.com/Shahidaktar" target="_blank">
              <FaGithub className="h-8 w-8 text-cyan-500 hover:text-sky-500" />
            </a>
          </motion.li>
          <motion.li variants={variants}>
            <a
              href="https://www.linkedin.com/in/shahid-aktar-mandal-331872292"
              target="_blank"
            >
              <FaLinkedinIn className="h-8 w-8 text-cyan-500 hover:text-sky-500" />
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
