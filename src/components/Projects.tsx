'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  subtitle: string;
  tagline: string;
  description: string[];
  highlights: { label: string; detail: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "Title Verification System for PRGI",
    subtitle: "Press Registrar General of India",
    tagline: "Large-scale title verification & hybrid semantic duplicate search engine",
    description: [
      "Processed and validated over 160,000+ publication titles using FastAPI and MongoDB Atlas for large-scale verification.",
      "Engineered a hybrid title matching pipeline combining all-MiniLM embeddings, RapidFuzz, and Customized Indic Soundex for semantic, fuzzy, and phonetic similarity search.",
      "Achieved over 95% matching accuracy using cosine similarity-based semantic retrieval to eliminate duplicate entries.",
      "Integrated Generative AI to deliver real-time guideline validation and actionable title suggestions, reducing manual review effort."
    ],
    highlights: [
      { label: "Scale", detail: "160,000+ Records" },
      { label: "Accuracy", detail: "95%+ Match Rate" },
      { label: "Pipeline", detail: "Semantic + Phonetic" }
    ],
    tags: ["FastAPI", "React.js", "MongoDB Atlas", "GenAI / RAG", "Embeddings", "Python", "Indic Soundex"],
    githubUrl: "https://github.com/Kavach1365/prgi-project-off",
    liveUrl: "https://prgi-frontend.netlify.app/"
  },
  {
    title: "RGUKT-B Club Council Ecosystem",
    subtitle: "Campus Operations & Engagement",
    tagline: "Centralized multi-role platform for university club updates & event workflows",
    description: [
      "Developed a Club Council management system with role-based dashboards (Students, Club Admins, Super Admins) using React.js and RESTful APIs.",
      "Centralized campus club data, announcements, and structural updates into a single scalable portal.",
      "Implemented seamless event registration workflows, automated notifications, and an intuitive UI to boost overall student engagement."
    ],
    highlights: [
      { label: "Architecture", detail: "Multi-Tier RBAC" },
      { label: "Stack", detail: "MERN Stack" },
      { label: "Focus", detail: "Campus Engagement" }
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/Kavach1365/RGUKT-COUNCIL",
     liveUrl: "https://club-council-rguktb.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-5xl mx-auto px-6 py-24 font-sans">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">
          FEATURED WORK
        </span>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl font-light text-slate-900">
          Projects
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl p-8 md:p-10 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.12)] hover:bg-white/50 transition-all duration-300"
          >
            {/* Top Bar: Title & Action Links */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 pb-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                  {project.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Glossy Action Buttons */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-slate-800 transition-colors"
                  >
                    {/* Fixed SVG Image rendering */}
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      className="w-3.5 h-3.5 invert"
                    />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-6 text-base font-medium text-slate-800 italic">
              &quot;{project.tagline}&quot;
            </p>

            {/* Highlights Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.highlights.map((h, hIdx) => (
                <div
                  key={hIdx}
                  className="rounded-xl bg-white/60 backdrop-blur-sm p-4 border border-white/80 shadow-xs"
                >
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                    {h.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 mt-0.5 block">
                    {h.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Description Bullets */}
            <ul className="mt-6 space-y-2.5">
              {project.description.map((bullet, bIdx) => (
                <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                  <span className="text-indigo-500 mt-1 select-none">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Glass Tech Badges */}
            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full bg-white/70 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-slate-800 border border-white/90 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}