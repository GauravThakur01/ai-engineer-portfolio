"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLightBulb, HiCog, HiDatabase, HiShieldCheck } from 'react-icons/hi'

const Innovation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const innovations = [
    {
      title: "Fully Autonomous Service Operations",
      description: "Multi-agent systems that own routine incidents end-to-end — triage, diagnose, resolve, document — with humans reserved for the judgment calls only humans should own. The next frontier of self-driving IT.",
      icon: HiCog,
      color: "from-blue-500 to-cyan-500",
      status: "Live pilots · scaling",
      timeline: "Now → 2026"
    },
    {
      title: "Enterprise-Grade Agent Governance",
      description: "The missing operating system for agentic AI in regulated environments: identity, permissions, cost caps, red-team evals, and full audit trails — so agents earn the right to run at 3 a.m.",
      icon: HiShieldCheck,
      color: "from-green-500 to-emerald-500",
      status: "Building",
      timeline: "2026"
    },
    {
      title: "Self-Curating Knowledge Fabric",
      description: "Vector estates that curate themselves — de-duplicate, freshness-score, and prune based on real usage. The end of stale RAG answers and the birth of knowledge platforms leaders can actually trust.",
      icon: HiDatabase,
      color: "from-purple-500 to-pink-500",
      status: "R&D",
      timeline: "2026"
    },
    {
      title: "AI That Adapts To Who's Asking",
      description: "Role-, region-, and risk-aware AI: dynamic retrieval and response scopes bound to identity and compliance context. Same platform. Every user gets the truth they're allowed to see.",
      icon: HiShieldCheck,
      color: "from-orange-500 to-red-500",
      status: "Design",
      timeline: "2026"
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
    <section id="innovation" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6">
            <HiLightBulb className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Bets I'm Making Right Now</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where AI Goes <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Next</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The four transformation bets I'm actively architecting for enterprise — not demos, not decks. Real platforms, real budgets.
          </p>
        </motion.div>

        {/* Innovation Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 group overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${innovation.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium mb-1">
                        {innovation.status}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {innovation.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-500 transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {innovation.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {index === 0 ? "25%" : index === 1 ? "45%" : index === 2 ? "15%" : "10%"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${innovation.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { 
                          width: index === 0 ? "25%" : index === 1 ? "45%" : index === 2 ? "15%" : "10%" 
                        } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiLightBulb className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="cyber-text">The Operating Belief</span>
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              "The next decade of AI won't be won by the most powerful model — it will be won by the leaders who
              can name the problem worth solving, ship the answer through a real production floor, and leave
              behind a team that keeps shipping. That's the discipline. That's the whole job."
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-500 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-400">Active Transformation Bets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400">Industries Live</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-500 mb-2">2026</div>
                <div className="text-gray-600 dark:text-gray-400">Horizon In Delivery</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Have a business problem that smells like AI? Let's find out.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <HiLightBulb className="w-5 h-5 mr-2" />
            Book a Working Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Innovation
