"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase, HiAcademicCap, HiLightBulb, HiCode } from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: "3+", label: "Years Experience", icon: HiBriefcase },
    { number: "50+", label: "Projects Completed", icon: HiCode },
    { number: "40+", label: "Concurrent Users", icon: HiLightBulb },
    { number: "80%", label: "Time Reduction", icon: HiAcademicCap },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Transforming the future of human-computer interaction through AI
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The AI Engineer Who Believes in <span className="cyber-text">Conversation</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I'm not just building AI systems—I'm crafting digital minds that understand context, 
                remember conversations, and respond with intelligence that feels genuinely human.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🎯 <span className="cyber-text">My Mission</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To bridge the gap between human intuition and machine efficiency. Every voice agent 
                I build, every RAG system I architect, is designed to make technology feel less like 
                technology and more like a trusted conversation partner.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🚀 <span className="cyber-text">What Drives Me</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The thrill of solving impossible problems. Whether it's reducing response times from 
                minutes to seconds, or building AI that can handle 50+ concurrent users while maintaining 
                context—I live for those moments when complex systems just work.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                💡 <span className="cyber-text">Innovation Philosophy</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                "AI should augment human intelligence, not replace it." I believe in building systems 
                that empower people, automate the mundane, and free humans to focus on what they do best—being creative, empathetic, and strategic.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8"
          >
            <span className="cyber-text">Core Values</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Precision & Performance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Every millisecond matters. I optimize for speed, accuracy, and reliability in every AI system I build.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Security & Privacy
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Multi-tenant architectures, secure namespaces, and privacy-first design are non-negotiable.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Scalable Innovation
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Building for today's needs while architecting for tomorrow's possibilities.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
