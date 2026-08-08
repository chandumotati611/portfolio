'use client';

import { motion } from 'framer-motion';

interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  location?: string;
  description: string[];
  skills: string[];
}

const timelineData: TimelineEntry[] = [
  {
    period: "JUNE 2025 - PRESENT",
    role: "Software Engineer",
    organization: "Achala Health Services Pvt. Ltd.",
    location: "Hyderabad, Telangana",
    description: [
      "Developed backend services using NestJS, Node.js, and TypeScript for an AI-assisted radiology platform.",
      "Integrated ML inference pipelines to automate pathology summary generation, reducing manual reporting effort.",
      "Designed and implemented a RAG-based clinical chatbot for querying patient case sheets using natural language.",
      "Built Carestack SDK for healthcare API integrations and implemented CI/CD pipelines with GitHub Actions, AWS S3, and GCP Buckets."
    ],
    skills: ["NestJS", "TypeScript", "Node.js", "RAG / GenAI", "AWS S3", "GCP", "CI/CD"]
  },
  {
    period: "SEP 2021 - MAY 2025",
    role: "B.Tech in Computer Science",
    organization: "Rajiv Gandhi University of Knowledge Technologies",
    location: "Basar • CGPA: 8.3",
    description: [
      "Focused on core CS fundamentals: Data Structures & Algorithms, Operating Systems, DBMS, and Web Technologies.",
      "Led team to the finals of Smart India Hackathon 2023 & 2024, surpassing 110+ competing teams."
    ],
    skills: ["Data Structures", "Algorithms", "Python", "SQL", "REST APIs"]
  },
  {
    period: "JUL 2019 - MAY 2021",
    role: "Pre-University Course (MPC)",
    organization: "Rajiv Gandhi University of Knowledge Technologies",
    location: "Basar • CGPA: 9.1",
    description: [
      "Completed Pre-University coursework specializing in Mathematics, Physics, and Chemistry."
    ],
    skills: ["Mathematics", "Physics", "Analytical Reasoning"]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="relative max-w-5xl mx-auto px-6 py-24 font-sans">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">
          JOURNEY
        </span>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl font-light text-slate-900">
          Career Timeline
        </h2>
      </div>

      {/* Vertical Timeline Container with increased left margin for clean spacing */}
      <div className="relative border-l border-slate-300/80 ml-4 md:ml-48 pl-6 md:pl-10 space-y-12">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group"
          >
            {/* Timeline Marker Circle */}
            <div className="absolute -left-7.75 md:-left-11.75 top-2 h-3.5 w-3.5 rounded-full bg-slate-950 ring-4 ring-slate-100/80 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300 z-10" />

            {/* Date Tag - Positioned safely to the left with zero overlap */}
            <div className="md:absolute md:-left-52 md:w-36 md:text-right md:top-1.5 text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-2 md:mb-0">
              {item.period}
            </div>

            {/* Premium Frosted Glassmorphism Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl p-6 md:p-8 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.12)] hover:bg-white/50 transition-all duration-300">
              
              {/* Glossy Top Edge Reflection Line */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

              <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
              <p className="text-xs font-semibold text-indigo-600 tracking-wide uppercase mt-1">
                {item.organization} {item.location ? `• ${item.location}` : ""}
              </p>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2">
                {item.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                    <span className="text-slate-400 select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Skill Badges with Glassmorphism */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-full bg-white/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium text-slate-800 border border-white/80 shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}