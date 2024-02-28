import React from "react";
import { motion } from "framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-secondary"
        >
          M
        </motion.span>

        <motion.div animate={{ rotate: -30, y: 6.5 }} className="h-1 w-6 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: -9, y: 18 }} className="h-1 w-6 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 29, y: 29,  }} className="h-1 w-6 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: -30, y: 25, x: 18 }} className="h-1 w-6 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 30, x: 18., y: -9.2 }} className="h-1 w-6 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: 27, y: 2 }} className="h-1 w-6 rounded bg-secondary"></motion.div>
      </motion.div>
    </>
  );
}
