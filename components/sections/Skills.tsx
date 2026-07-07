"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiOpenai, 
  SiPython, 
  SiReact, 
  SiFastapi, 
  SiMicrosoft, 
  SiDocker,
  SiKubernetes,
  SiTwilio,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiLinux,
  SiAmazonaws,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiGithub,
  SiVisualstudiocode,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiJupyter,
  SiAnaconda
} from 'react-icons/si'
import {
  HiChatAlt2,
  HiCode,
  HiLightBulb,
  HiChip,
  HiUserGroup,
  HiCog,
  HiShieldCheck,
  HiTrendingUp,
  HiSparkles,
  HiBriefcase,
  HiOfficeBuilding,
  HiAcademicCap,
} from 'react-icons/hi'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "🏆 Principal-Level Expertise",
      icon: "🎯",
      isHighlighted: true,
      skills: [
        { name: "AI Strategy & Transformation", icon: HiTrendingUp, color: "from-yellow-400 to-orange-600", expertise: "Expert" },
        { name: "Enterprise Solution Architecture", icon: HiOfficeBuilding, color: "from-blue-400 to-cyan-600", expertise: "Expert" },
        { name: "Executive & Stakeholder Alignment", icon: HiChatAlt2, color: "from-pink-400 to-rose-600", expertise: "Expert" },
        { name: "Generative & Agentic AI", icon: HiSparkles, color: "from-purple-400 to-pink-600", expertise: "Expert" },
        { name: "AI Team Leadership & CoE Design", icon: HiUserGroup, color: "from-green-400 to-emerald-600", expertise: "Expert" },
        { name: "LLMOps, Evals & Guardrails", icon: HiShieldCheck, color: "from-red-400 to-pink-600", expertise: "Expert" },
      ]
    },
    {
      title: "Generative AI & LLM Stack",
      icon: "🧠",
      skills: [
        { name: "OpenAI (GPT-4o, o-series)", icon: SiOpenai, color: "from-green-400 to-emerald-600" },
        { name: "Azure OpenAI Service", icon: SiMicrosoft, color: "from-blue-500 to-cyan-600" },
        { name: "Anthropic Claude", icon: HiSparkles, color: "from-orange-400 to-amber-600" },
        { name: "LangChain & LlamaIndex", icon: SiPython, color: "from-yellow-400 to-orange-600" },
        { name: "RAG & Vector Retrieval", icon: HiChatAlt2, color: "from-blue-400 to-cyan-600" },
        { name: "Multi-Agent Orchestration", icon: HiCog, color: "from-purple-400 to-pink-600" },
      ]
    },
    {
      title: "AI/ML Foundations",
      icon: "🤖",
      skills: [
        { name: "Prompt & Context Engineering", icon: HiLightBulb, color: "from-yellow-400 to-orange-600" },
        { name: "Whisper & Speech AI", icon: SiOpenai, color: "from-green-400 to-emerald-600" },
        { name: "Fine-tuning & LoRA", icon: HiChip, color: "from-purple-400 to-pink-600" },
        { name: "TensorFlow", icon: SiTensorflow, color: "from-orange-400 to-red-600" },
        { name: "PyTorch", icon: SiPytorch, color: "from-red-400 to-pink-600" },
        { name: "Hugging Face", icon: SiGit, color: "from-yellow-400 to-orange-600" },
      ]
    },
    {
      title: "Cloud & Platform Engineering",
      icon: "☁️",
      skills: [
        { name: "Microsoft Azure (Primary)", icon: SiMicrosoft, color: "from-blue-500 to-cyan-600" },
        { name: "AWS", icon: SiAmazonaws, color: "from-orange-400 to-yellow-600" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "from-blue-400 to-red-500" },
        { name: "Docker & Containers", icon: SiDocker, color: "from-blue-400 to-cyan-600" },
        { name: "Kubernetes / AKS", icon: SiKubernetes, color: "from-blue-600 to-purple-600" },
        { name: "Zero-Trust & Compliance", icon: HiShieldCheck, color: "from-gray-700 to-black" },
      ]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      skills: [
        { name: "FastAPI", icon: SiFastapi, color: "from-teal-400 to-cyan-600" },
        { name: "Python", icon: SiPython, color: "from-blue-400 to-indigo-600" },
        { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-emerald-600" },
        { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-800" },
        { name: "Flask", icon: SiFlask, color: "from-gray-700 to-gray-900" },
        { name: "REST / WebSockets / GraphQL", icon: HiCode, color: "from-green-400 to-teal-600" },
      ]
    },
    {
      title: "Frontend & UI",
      icon: "🎨",
      skills: [
        { name: "React", icon: SiReact, color: "from-cyan-400 to-blue-600" },
        { name: "Next.js", icon: SiNextdotjs, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", icon: SiTypescript, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-400 to-teal-600" },
        { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-orange-600" },
        { name: "HTML / CSS", icon: HiCode, color: "from-orange-400 to-red-500" },
      ]
    },
    {
      title: "Data & Automation",
      icon: "🔀",
      skills: [
        { name: "n8n Workflow Automation", icon: HiCog, color: "from-pink-400 to-rose-600" },
        { name: "Power Platform", icon: SiMicrosoft, color: "from-blue-500 to-cyan-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-600 to-indigo-700" },
        { name: "MongoDB", icon: SiMongodb, color: "from-green-500 to-emerald-600" },
        { name: "Vector DBs (Pinecone, pgvector)", icon: HiChip, color: "from-purple-400 to-pink-600" },
        { name: "Redis Cache", icon: SiRedis, color: "from-red-500 to-pink-600" },
      ]
    },
    {
      title: "Delivery & Leadership",
      icon: "🎓",
      skills: [
        { name: "Hiring & Team Building", icon: HiUserGroup, color: "from-cyan-400 to-blue-600" },
        { name: "Executive Advisory", icon: HiBriefcase, color: "from-purple-500 to-pink-600" },
        { name: "Change Management", icon: HiTrendingUp, color: "from-green-400 to-emerald-600" },
        { name: "Upskilling & Enablement", icon: HiAcademicCap, color: "from-yellow-400 to-orange-600" },
        { name: "Roadmap & OKR Design", icon: HiLightBulb, color: "from-orange-400 to-red-500" },
        { name: "Vendor & Build-vs-Buy Strategy", icon: HiOfficeBuilding, color: "from-blue-500 to-indigo-700" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Full-Stack, <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">In The Widest Sense</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From the boardroom framing of a problem to the observability stack that keeps the answer alive at 3 a.m.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
              className={`${
                category.isHighlighted 
                  ? 'lg:col-span-2 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-400 dark:border-yellow-500' 
                  : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
              } rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${
                  category.isHighlighted 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600' 
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600'
                } rounded-xl flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className={`text-xl font-bold ${
                  category.isHighlighted 
                    ? 'text-orange-900 dark:text-yellow-300' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className={`flex items-center justify-between p-3 ${
                        category.isHighlighted 
                          ? 'bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-700' 
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      } rounded-xl border hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 group`}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`font-medium group-hover:text-cyan-500 transition-colors duration-300 ${
                          category.isHighlighted 
                            ? 'text-orange-900 dark:text-yellow-200' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      {(skill as any).expertise && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {(skill as any).expertise}
                        </span>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="cyber-text">Where I Operate Deepest</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">98%</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AI Strategy & Architecture
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                From problem framing to signed architecture — pricing, risk, and ROI baked in
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">95%</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                GenAI, Agents & LLMOps
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Agentic systems, RAG, evals, and guardrails that survive real production
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">92%</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Leadership & Enablement
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Standing up AI teams and centers of excellence so capability outlives the engagement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
