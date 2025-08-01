"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiPaperAirplane,
  HiUser,
  HiChatAlt2
} from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "GauravThakur2350@gmail.com",
      href: "mailto:GauravThakur2350@gmail.com"
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+91 7650941605",
      href: "tel:+917650941605"
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Available Globally",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/gauravThakur01",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gauravthakur",
      color: "hover:text-blue-600"
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "https://twitter.com/gauravthakur",
      color: "hover:text-blue-400"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/917650941605",
      color: "hover:text-green-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6">
            <HiChatAlt2 className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to build the next generation of AI solutions? Let's discuss your project and explore how we can create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm always excited to discuss new opportunities and innovative AI projects.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Project discussion, Collaboration, etc."
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info Sidebar - Takes 1 column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-medium text-sm">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5 mr-1" />
                      <span className="font-medium text-sm">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-6 border border-cyan-500/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Currently Available
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Open to new projects and collaborations
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Response time: Usually within 24 hours
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-500 mb-1">50+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">3+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">100%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">AI Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
