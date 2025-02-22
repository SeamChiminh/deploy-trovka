import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImLocation } from "react-icons/im";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Metadata } from "../../lib/Metadata";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensure CSS is imported
import { useTranslation } from "react-i18next";

export const ContactUsNew = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Simulate loading for 0.7 seconds
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Metadata
        title="Contact Us | TrovKa"
        description="Welcome to Service-TrovKa"
        author="SainaIna"
        keywords="services, trovka, home"
        thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
      />

      <motion.div
        className="flex flex-col items-center justify-center pb-20 px-4 md:px-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div className="w-full max-w-5xl h-auto flex flex-col lg:flex-row justify-center items-center rounded-lg p-8">
          {loading ? (
            <div className="flex flex-col lg:flex-row w-full gap-8"></div>
          ) : (
            <>
              <motion.div
                className="w-full lg:w-[525px] mb-8 lg:mb-0"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="w-full my-[10px] h-[45px] text-center lg:text-left">
                  <p className="text-[24px] lg:text-[36px] font-semibold text-Primary dark:text-Action">
                    {t("Get_InTouch")}
                  </p>
                </div>
                <div className="w-full h-[71px] mb-[40px] text-center lg:text-left">
                  <p className="pt-2 text-[16px] lg:text-[18px]">
                    {t("Contact_Des")}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-7 mb-5 w-full justify-center lg:justify-start">
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] bg-Secondary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <a href="#">
                        <ImLocation className="text-white text-[30px]" />
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{t("Address")}</p>
                      <a href="#">
                        <p className="text-sm font-normal hover:underline">
                          Khan Toul Kork, Phnom Penh, Cambodia
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-7 mb-5 w-full justify-center lg:justify-start">
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] bg-Secondary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <a href="#">
                        <FaPhoneAlt className="text-white text-[30px]" />
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{t("Phone")}</p>
                      <a href="#">
                        <p className="text-sm font-normal hover:underline">
                          +855 12 123 234
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-7 mb-5 w-full justify-center lg:justify-start">
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] bg-Secondary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <a href="#">
                        <IoIosMail className="text-white text-[40px]" />
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{t("Email")}</p>
                      <a href="#">
                        <p className="text-sm font-normal hover:underline">
                          trovka@gmail.com
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="w-[90%] lg:w-full" />

                <div className="mt-5 w-full text-center lg:text-left mb-10">
                  <p className="font-semibold text-xl lg:text-2xl">
                    {t("Follow_Us")}
                  </p>
                  <div className="flex gap-4 mt-5 justify-center lg:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-[50px] h-[50px] bg-Secondary rounded-full flex items-center justify-center"
                    >
                      <a href="#">
                        <FaFacebookF className="text-white text-[30px]" />
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-[50px] h-[50px] bg-Secondary rounded-full flex items-center justify-center"
                    >
                      <a href="#">
                        <FaTelegramPlane className="text-white text-[30px]" />
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-[50px] h-[50px] bg-Secondary rounded-full flex items-center justify-center"
                    >
                      <a href="#">
                        <FaYoutube className="text-white text-[30px]" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <dotlottie-player
                src="https://lottie.host/bcb00bc0-60db-4db2-b969-2c843145d5ca/1jfVrWOQ3z.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                className="w-full lg:w-[525px] h-auto"
              ></dotlottie-player>
            </>
          )}
        </motion.div>
      </motion.div>
      <div className="w-full px-4 md:px-0 -mt-10">
        <div className="w-full h-auto mb-4 text-center">
          <p className="text-[24px] lg:text-[36px] font-semibold text-Primary dark:text-Action">
            {t("Contact_Us")}
          </p>
          <p className="pt-2 text-[14px] lg:text-[16px] px-8 text-gray-500 dark:text-gray-200">
            {t("Any_Question")}
          </p>
        </div>

        <div className="w-full lg:w-3/5 mx-auto mb-[100px] p-8">
          <form action="" className="w-full">
            <label className="text-md font-normal" htmlFor="name">
              {t("Name")}
            </label>
            <br />
            <div className="w-full flex flex-col lg:flex-row gap-4 mb-5">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("Your_Name")}
                className="w-full border border-gray-300 rounded-lg p-2 dark:bg-gray-800"
              />
            </div>
            <label className="text-md font-normal" htmlFor="email">
              {t("Email")}
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("Your_Email")}
              className="w-full border border-gray-300 rounded-lg p-2 mb-5 dark:bg-gray-800"
            />
            <label className="text-md font-normal" htmlFor="message">
              {t("Message")}
            </label>
            <br />
            <textarea
              id="message"
              name="message"
              placeholder={t("Your_Message")}
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2 mb-5 dark:bg-gray-800 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-Secondary w-full lg:w-auto text-white py-2 px-4 rounded-lg"
            >
              {t("Send_Message")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
