import React from "react";
import { motion } from "framer-motion";
import { Slackey } from "next/font/google";
import { cn } from "../../../lib/utils";

const font = Slackey({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          opacity: { delay: 5, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className={cn(
            "absolute h-full w-full flex justify-center items-center text-lg font-Header font-bold text-secondary",
            font.className
          )}
        >
          M
        </motion.span>

        <motion.div
          animate={{ rotate: -30, y: 6.5 }}
          className="h-1 w-6 rounded bg-secondary"
        ></motion.div>
        <motion.div
          animate={{ rotate: 90, x: -9, y: 18 }}
          className="h-1 w-6 rounded bg-secondary"
        ></motion.div>
        <motion.div
          animate={{ rotate: 29, y: 29 }}
          className="h-1 w-6 rounded bg-secondary"
        ></motion.div>
        <motion.div
          animate={{ rotate: -30, y: 25, x: 18 }}
          className="h-1 w-6 rounded bg-secondary"
        ></motion.div>
        <motion.div
          animate={{ rotate: 30, x: 18, y: -9.2 }}
          className="h-1 w-6 rounded bg-secondary"
        ></motion.div>
        <motion.div
          animate={{ rotate: 90, x: 27, y: 2 }}
          className="h-1 w-6 rounded bg-secondary"
        ></motion.div>
      </motion.div>
    </>
  );
}
