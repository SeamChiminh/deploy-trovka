import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../../components/aboutus/Card";
import { Team } from "../../components/aboutus/Team";
import { Mentor } from "../../components/aboutus/Mentor";
import { motion } from "framer-motion";
import { Metadata } from "../../lib/Metadata";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Simulate a longer loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden mx-4 lg:my-[10px] lg:mx-30">
      <Metadata
        title="AboutUs | Troka"
        description="All about me "
        author="SainaInaIna"
        keywords="services, trovka, aboutus"
        thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
      />
      <>
        <motion.img
          src="image/logo/trovka-icon.png"
          alt="Logo"
          className="mx-auto mb-6 w-16 h-16 lg:w-20 lg:h-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="mb-[5px] text-4xl font-bold text-[#98caf9] text-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("About_Trovka")}
        </motion.h1>
        <div className="px-4 py-[2px] w-full max-w-3xl mx-auto">
          <motion.p
            className="mt-5 text-center text-gray-900 dark:text-gray-300 lg:text-left"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t("About_Des")}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-[9px] mb-[40px] lg:w-1/2 lg:mx-auto"
        >
          <dotlottie-player
            src="https://lottie.host/4664f3d5-bf53-4a77-a45c-b59b74b7f5f1/8eZIpWEnNY.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </motion.div>
        <div className="px-4 lg:px-8 xl:px-16 2xl:px-32 mb-[90px] overflow-x-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center lg:items-center my-4 lg:my-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-[#98caf9] text-center">
                {t("Goal_Mission_Vision")}
              </h2>
            </div>
          </div>
        </div>

        <Card />
        <div className="mt-8 lg:mt-20 px-4 lg:px-8">
          <motion.div
            className="bg-[#022278] py-2 text-white rounded-md flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-base lg:text-lg">{t("Our_Mentor")}</span>
          </motion.div>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Mentor />
          </motion.div>
        </div>
        <motion.div
          className="bg-[#022278] pt-[3px] w-full h-[30px] mb-[100px] text-white rounded-md flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Our_Team")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Team />
        </motion.div>
      </>
    </div>
  );
};

export default AboutUs;
