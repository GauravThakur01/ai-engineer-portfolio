"use client"

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaGlobe, FaHeart } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/gaurav-thakur-91509923a", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/GauravThakur01", label: "GitHub" },
    { icon: FaGlobe, href: "https://skytek.cloud", label: "SKYTEK Cloud" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Innovation", href: "#innovation" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-5"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">GT</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Gaurav Thakur
                  </span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  <span className="text-cyan-400 font-semibold">Business problem in. Production AI out.</span>
                  <br />
                  Principal AI Architect &amp; Head of AI Transformation — end-to-end from strategy to the team that runs the system after I've moved on.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <a href="mailto:Gaurav.thakur@mspautomation.net" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <HiMail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Gaurav.thakur@mspautomation.net</span>
                </a>
                <a href="tel:+15612083804" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <HiPhone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>+1 (561) 208-3804</span>
                </a>
                <div className="flex items-center text-gray-400">
                  <HiLocationMarker className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>US · Working Globally</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-semibold mb-6 text-white"
              >
                Quick Links
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3"
              >
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Services */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl font-semibold mb-6 text-white"
              >
                Services
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3 text-gray-400"
              >
                <li>AI Strategy &amp; Transformation</li>
                <li>Enterprise Solution Architecture</li>
                <li>Agentic Systems &amp; RAG Platforms</li>
                <li>LLMOps, Evals &amp; Guardrails</li>
                <li>AI Team &amp; CoE Build-out</li>
              </motion.ul>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gray-800 pt-8 mt-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-2">
                  © {currentYear} Gaurav Thakur — Principal AI Architect &amp; Head of AI Transformation
                </p>
                <p className="text-gray-500 text-sm flex items-center justify-center md:justify-end">
                  Powered by <a href="https://skytek.cloud" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mx-1">SKYTEK Cloud</a>
                  <FaHeart className="w-3 h-3 mx-1 text-red-500" /> AI-Powered IT since 2012
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
      </div>
    </footer>
  )
}

export default Footer
