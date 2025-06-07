"use client";
import React from "react";
import { motion } from "framer-motion";

const YellowBanner = () => {
  return (
    <motion.div
      className="absolute left-0 top-12 h-1 bg-wu-official"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  );
};

export default YellowBanner;
