"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiPlay, HiCode, HiExternalLink, HiLockClosed } from 'react-icons/hi'
import { SiOpenai, SiReact, SiFastapi, SiMicrosoft, SiTwilio, SiPython } from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "Real-Time AI Voice Dispatch Assistant",
      subtitle: "The First AI Engineer Who Picks Up Your Call",
      description: "A revolutionary real-time AI voice agent that acts as the first responder for MSP support calls. Intelligently listens, extracts details, analyzes urgency, creates tickets in HaloPSA, and routes to engineers—all in under 15 seconds.",
      features: [
        "Fully SIP-integrated with Twilio and Asterisk",
        "OpenAI Whisper for speech-to-text conversion",
        "GPT-4o for intelligent prompt processing",
        "Real-time voice responses using OpenAI Speech API",
        "Secure webhook-based communication",
        "Azure-hosted backend with global availability"
      ],
      tech: [
        { name: "OpenAI Whisper", icon: SiOpenai },
        { name: "GPT-4o", icon: SiOpenai },
        { name: "Twilio SIP", icon: SiTwilio },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Azure", icon: SiMicrosoft },
        { name: "Python", icon: SiPython }
      ],
      status: "Internal | Demo on request",
      isInternal: true,
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎙️",
      metrics: [
        { label: "Response Time", value: "< 5s" },
        { label: "Accuracy", value: "95%" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      id: 2,
      title: "RAG-Based AI Knowledge Chatbot",
      subtitle: "ChatGPT for Your Organization — With Access Control",
      description: "Production-grade Retrieval-Augmented Generation chatbot enabling secure internal documentation queries. Features multi-organization isolation, advanced vector search, and real-time responses for 40-50 concurrent users.",
      features: [
        "Built with LangChain and GPT-4o integration",
        "Secure vector isolation with dynamic namespaces",
        "Multi-tenant architecture with department separation",
        "Chat memory with intelligent summarization",
        "React frontend with dark mode and streaming",
        "Kubernetes deployment on Azure AKS"
      ],
      tech: [
        { name: "React", icon: SiReact },
        { name: "FastAPI", icon: SiFastapi },
        { name: "LangChain", icon: SiPython },
        { name: "GPT-4o", icon: SiOpenai },
        { name: "Azure AKS", icon: SiMicrosoft },
        { name: "Pinecone", icon: SiPython }
      ],
      status: "Internal | Code sample available privately",
      isInternal: true,
      gradient: "from-purple-500 to-pink-500",
      icon: "🧠",
      metrics: [
        { label: "Concurrent Users", value: "40-50" },
        { label: "Query Speed", value: "< 2s" },
        { label: "Accuracy", value: "92%" }
      ]
    },
    {
      id: 3,
      title: "AI-Powered QA Automation System",
      subtitle: "Making Quality Audits Autonomous",
      description: "Automated pipeline analyzing technical support conversations using AI. Evaluates SOP adherence, tonal quality, and response accuracy—reducing human review time by 80% while maintaining quality standards.",
      features: [
        "Automatic transcription of call recordings",
        "GPT-4o review against SOP checklist",
        "Advanced scoring logic and analytics",
        "Daily performance summaries and insights",
        "Integration with existing QA workflows",
        "Custom review application with feedback loops"
      ],
      tech: [
        { name: "OpenAI Whisper", icon: SiOpenai },
        { name: "GPT-4o", icon: SiOpenai },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Power Automate", icon: SiMicrosoft },
        { name: "Python", icon: SiPython },
        { name: "Azure", icon: SiMicrosoft }
      ],
      status: "Internal Preview",
      isInternal: false,
      gradient: "from-green-500 to-teal-500",
      icon: "🧪",
      metrics: [
        { label: "Time Reduction", value: "80%" },
        { label: "Processing Speed", value: "5x faster" },
        { label: "Accuracy", value: "94%" }
      ]
    }
  ]

  const additionalProjects = [
    {
      title: "Onboarding + Offboarding Automation",
      description: "Fully automated identity lifecycle across Entra ID, Meraki, and Azure using PowerShell + Forms",
      tech: ["PowerShell", "Microsoft Forms", "Entra ID", "Azure"],
      icon: "⚡"
    },
    {
      title: "SOC Alert Response Automation",
      description: "Form-based alert confirmation to auto-suppress noise and enrich alert context with location intelligence",
      tech: ["Power Automate", "Security APIs", "Location Services"],
      icon: "🔒"
    },
    {
      title: "Billing + Cost Optimization Dashboards",
      description: "Power BI dashboards with MySQL data models for cost tracking and profitability analysis",
      tech: ["Power BI", "MySQL", "Data Analytics", "Azure"],
      icon: "📊"
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into intelligent systems that deliver real-world impact
          </p>
        </motion.div>

        {/* Main Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:flex">
                {/* Content Side */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mr-4 text-2xl`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-lg text-cyan-500 font-semibold">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    {project.isInternal && (
                      <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm">
                        <HiLockClosed className="w-4 h-4 mr-1" />
                        Internal
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">✅ Key Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🛠️ Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, idx) => {
                        const Icon = tech.icon
                        return (
                          <div key={idx} className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                            <Icon className="w-4 h-4 mr-2 text-cyan-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    🔒 {project.status}
                  </div>
                </div>

                {/* Metrics Side */}
                <div className="lg:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Performance Metrics
                  </h4>
                  <div className="space-y-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                          {metric.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="cyber-text">Additional Projects</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4 text-center">{project.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
