'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import Image from "next/image";


export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative max-w-5xl mx-auto px-6 pt-12 pb-16 font-sans">
      {/* Contact Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl p-8 md:p-14 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] text-center"
      >
        {/* Glossy Top Edge Reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

        <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">
          GET IN TOUCH
        </span>

        <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-slate-900">
          Let’s Build Something Scalable.
        </h2>

        <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
          Whether you want to discuss backend architectures, high-performance systems, or potential engineering opportunities—my inbox is always open.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:devichandureddymotati@gmail.com"
            className="flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-xs font-bold tracking-widest text-white shadow-md hover:bg-slate-800 transition-all duration-200"
          >
            <Mail size={15} />
            <span>SAY HELLO</span>
          </a>

          <a
            href="https://linkedin.com/in/chandureddy611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-6 py-3 text-xs font-bold tracking-wider text-slate-800 border border-white/90 shadow-2xs hover:bg-white transition-all duration-200"
          >
            <Image src="/linkedin.svg" alt='linkedin' width={20} height={20} />
            <span>LINKEDIN</span>
            <ArrowUpRight size={13} className="text-slate-400" />
          </a>

          <a
            href="https://github.com/chandumotati611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-6 py-3 text-xs font-bold tracking-wider text-slate-800 border border-white/90 shadow-2xs hover:bg-white transition-all duration-200"
          >
            <Image src="/github.svg" alt="GitHub" width={20} height={20}/>
            <span>GITHUB</span>
            <ArrowUpRight size={13} className="text-slate-400" />
          </a>
        </div>
      </motion.div>

      {/* Bottom Legal / Copyright */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 px-2">
        <p>© {currentYear} Devi Chandu Motati.</p>
        <a
          href="#top"
          className="hover:text-slate-900 transition-colors"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}