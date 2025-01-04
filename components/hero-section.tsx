"use client"

import { motion } from "framer-motion"
import { TypewriterEffect } from "./ui/typewriter-effect"

export function HeroSection() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Jyoti",
      className: "text-purple-500 dark:text-purple-400",
    },
  ]

  return (
    <div className="h-[40rem] w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <TypewriterEffect 
          words={words}
          className="relative"
          cursorClassName="bg-purple-500"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl mt-4 relative"
        >
          <span className="relative z-10">Your Web Developer</span>
          <span className="absolute inset-0 transform translate-x-1 translate-y-1 text-pink-300 dark:text-pink-600 -z-10">Your Web Developer</span>
        </motion.div>
      </div>
    </div>
  )
}

