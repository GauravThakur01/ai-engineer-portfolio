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
      title: "Autonomous Service Operations Platform",
      subtitle: "AI as the First Responder for Enterprise Support",
      description: "A production agentic layer that acts as the first responder for enterprise support: listens in real time, extracts intent, checks urgency against runbooks, opens tickets in the PSA, and routes to a human only when the AI can't safely resolve. Live inside a security-first MSP serving businesses since 2012.",
      features: [
        "SIP-integrated voice front door with Twilio & Asterisk",
        "GPT-4o reasoning with tool-use and structured outputs",
        "Human-in-the-loop escalation with full audit trail",
        "Guardrails, evals, and observability from day one",
        "Azure-hosted, zero-trust network posture",
        "Deep integration with PSA, RMM, and identity stack"
      ],
      tech: [
        { name: "Agentic AI", icon: SiOpenai },
        { name: "GPT-4o", icon: SiOpenai },
        { name: "Twilio SIP", icon: SiTwilio },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Azure", icon: SiMicrosoft },
        { name: "Python", icon: SiPython }
      ],
      status: "Live in production | Demo on request",
      isInternal: true,
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎙️",
      metrics: [
        { label: "L1 Auto-Resolved", value: "60%" },
        { label: "Mean Time to Resolve", value: "−45%" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      id: 2,
      title: "Enterprise Knowledge Copilot (RAG)",
      subtitle: "ChatGPT For Your Company — With Access Control That CISOs Sign",
      description: "Production RAG platform serving multi-tenant departments with clause-level citations, role-based retrieval, and full audit logs. Designed so answers are not just correct — they are provably correct, traceable to source, and safe to expose to auditors.",
      features: [
        "LangChain + GPT-4o with dynamic per-tenant namespaces",
        "Row-level access control mapped to identity provider",
        "Chat memory with intelligent summarization",
        "Streaming React frontend, dark-mode by default",
        "Kubernetes deployment on Azure AKS",
        "Full evals, red-team, and citation traceability"
      ],
      tech: [
        { name: "React", icon: SiReact },
        { name: "FastAPI", icon: SiFastapi },
        { name: "LangChain", icon: SiPython },
        { name: "GPT-4o", icon: SiOpenai },
        { name: "Azure AKS", icon: SiMicrosoft },
        { name: "Pinecone", icon: SiPython }
      ],
      status: "Live in production | Code sample on request",
      isInternal: true,
      gradient: "from-purple-500 to-pink-500",
      icon: "🧠",
      metrics: [
        { label: "Concurrent Users", value: "40-50" },
        { label: "Query Latency", value: "< 2s" },
        { label: "Cited Accuracy", value: "92%" }
      ]
    },
    {
      id: 3,
      title: "AI Quality Assurance & Coaching Engine",
      subtitle: "Making Quality Audits Autonomous — Not Just Cheaper",
      description: "An automated review pipeline that transcribes, evaluates, and scores support conversations against SOP, tone, and outcome — then feeds coaching prompts back to individual engineers. Cut human QA review time by 80% while raising, not lowering, standards.",
      features: [
        "Automatic transcription of call and chat recordings",
        "GPT-4o review against SOP + tone + resolution rubric",
        "Advanced scoring with per-engineer coaching output",
        "Daily leader summaries with trend detection",
        "Integrates with existing QA and HR workflows",
        "Feedback loop to continuously refine the rubric"
      ],
      tech: [
        { name: "OpenAI Whisper", icon: SiOpenai },
        { name: "GPT-4o", icon: SiOpenai },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Power Automate", icon: SiMicrosoft },
        { name: "Python", icon: SiPython },
        { name: "Azure", icon: SiMicrosoft }
      ],
      status: "Live | Rolling out to additional teams",
      isInternal: false,
      gradient: "from-green-500 to-teal-500",
      icon: "🧪",
      metrics: [
        { label: "Review Time Reduced", value: "80%" },
        { label: "Processing Speed", value: "5× faster" },
        { label: "Rubric Accuracy", value: "94%" }
      ]
    }
  ]

  const additionalProjects = [
    {
      title: "Identity Lifecycle Automation",
      description: "Zero-touch onboarding and offboarding across Entra ID, Intune, and Azure — from Forms trigger to signed-off audit trail",
      tech: ["PowerShell", "Entra ID", "Intune", "Azure", "MS Forms"],
      icon: "⚡"
    },
    {
      title: "SOC Response Copilot",
      description: "Form-based alert confirmation with location intelligence and auto-suppression — turns MDR/SIEM noise into signal in seconds",
      tech: ["Power Automate", "Sentinel", "Location APIs"],
      icon: "🔒"
    },
    {
      title: "Profitability & FinOps Dashboards",
      description: "Executive-grade Power BI dashboards on top of MySQL models — client-level margin, cost drift, and AI-driven anomaly flags",
      tech: ["Power BI", "MySQL", "Azure", "Anomaly Detection"],
      icon: "📊"
    },
    {
      title: "Document Intelligence for Compliance",
      description: "Retrieval + extraction platform with clause-level citations and human checkpoints — turned days of review into minutes, audit-ready by construction",
      tech: ["RAG", "GPT-4o", "Vector Search", "Audit"],
      icon: "📄"
    },
    {
      title: "Revenue Operations Agent Platform",
      description: "Multi-agent layer for lead enrichment, proposal drafting, and forecast hygiene — sales ops as a background process",
      tech: ["Multi-Agent", "CRM APIs", "n8n", "Analytics"],
      icon: "🎯"
    },
    {
      title: "AI Enablement & CoE Design",
      description: "Stood up an internal AI Center of Excellence: hiring plan, tooling stack, evals culture, and shipping cadence — capability that outlives me",
      tech: ["Team Building", "Playbooks", "Enablement", "Governance"],
      icon: "🏛️"
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
            Selected <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Transformations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            End-to-end systems that survived contact with reality — real users, real audits, real 3 a.m. incidents.
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
            <span className="cyber-text">Also In Production</span>
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
