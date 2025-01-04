"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-600 dark:text-purple-400 relative">
        <span className="relative z-10">Get In Touch</span>
        <span className="absolute inset-0 transform translate-x-1 translate-y-1 text-pink-300 dark:text-pink-600 -z-10">Get In Touch</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex flex-col space-y-4">
            <Button variant="outline" className="justify-start" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a href="mailto:jyz@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

