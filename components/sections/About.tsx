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
    { number: "End-to-End", label: "Idea → Deploy → Scale", icon: HiBriefcase },
    { number: "12+", label: "AI Systems in Production", icon: HiCode },
    { number: "6+", label: "Industries Transformed", icon: HiLightBulb },
    { number: "40%", label: "Avg. Operating Cost Reduced", icon: HiAcademicCap },
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
            Most AI initiatives die in the gap between the strategy deck and the production deploy. I was built for that gap.
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
                The Architect Who Carries It <span className="cyber-text">All The Way</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Enterprises don't have an AI-model problem — they have a <span className="text-gray-900 dark:text-white font-semibold">translation problem</span>.
                The business knows where it bleeds money. Engineering knows what's possible. Very few people can
                stand in the middle, speak both languages fluently, and carry a solution the whole distance. That's my job description.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🎯 <span className="cyber-text">What I Actually Do</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I sit with operators and executives to find the problem worth solving, pressure-test it against
                the data and systems that actually exist, then architect, build, and ship the platform myself —
                with the evals, guardrails, and runbooks that keep it alive after the applause.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🏛️ <span className="cyber-text">Where I Sharpen It</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At <span className="text-gray-900 dark:text-white font-semibold">SKYTEK Cloud</span> I lead the AI transformation practice for a
                security-first MSP that's served businesses since 2012 — which means everything I ship has to
                survive real users, real audits, and real 3 a.m. incidents. That discipline travels with me into
                every industry I work in: finance, healthcare, professional services, logistics, and beyond.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                💡 <span className="cyber-text">The Operating Belief</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                "Transformation isn't a project you deliver — it's a capability you leave behind."
                Every engagement ends with a running system <span className="text-gray-900 dark:text-white font-semibold">and</span>
                the team to run it. The measure of my work is what keeps shipping after I've moved to the next problem.
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
            <span className="cyber-text">Operating Principles</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Business First, Model Second
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                The technology is chosen last. If the ROI case doesn't survive a skeptical CFO, it doesn't get built.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Production Is The Only Demo
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Prototypes teach; they don't sell. Everything I show runs on real data with real guardrails, evals, and observability.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Teams Over Heroes
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                I hire, mentor, and hand over. What I leave behind is a capability, not a dependency.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
