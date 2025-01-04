"use client"

import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, 
  SiJavascript, SiHtml5, SiCss3, SiGit, SiPostman
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "REST APIs", icon: SiPostman },
]

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-600 dark:text-purple-400 relative">
        <span className="relative z-10">Skills</span>
        <span className="absolute inset-0 transform translate-x-1 translate-y-1 text-pink-300 dark:text-pink-600 -z-10">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-center"
          >
            <CardContainer className="inter-var">
              <CardBody className="group/card relative h-24 w-24 rounded-xl border border-black/[0.1] dark:border-white/[0.2] bg-gray-50 dark:bg-black p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardItem
                  translateZ="50"
                  className="flex flex-col items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <skill.icon className="text-3xl mb-2 text-purple-500 dark:text-purple-400" />
                  </motion.div>
                  <h3 className="text-xs font-semibold text-center text-neutral-600 dark:text-white">
                    {skill.name}
                  </h3>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

