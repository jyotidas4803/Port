"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-600 dark:text-purple-400 relative">
        <span className="relative z-10">Projects</span>
        <span className="absolute inset-0 transform translate-x-1 translate-y-1 text-pink-300 dark:text-pink-600 -z-10">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardContainer className="inter-var">
        <CardBody className="relative group/card h-full w-full rounded-xl border border-black/[0.1] dark:border-white/[0.2] bg-gray-50 dark:bg-black p-6 hover:shadow-xl transition-shadow">
          <CardItem
            translateZ="100"
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-lg aspect-video">
              {!imageError ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover/card:scale-110"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Image not available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">

                <Link href={project.demoLink} >
                  
                    <FaExternalLinkAlt className="mr-2" /> Demo
                 
                </Link>
                <Link href={project.githubLink} >
                  
                    <FaGithub className="mr-2" /> GitHub
                 
                </Link>


              </div>
            </div>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
          >
            {project.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
          >
            {project.description}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}

