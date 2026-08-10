'use client';

import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 mx-auto w-full px-4 font-sans md:px-8">
      <nav
        className="
          relative mx-auto flex h-16 max-w-6xl items-center justify-between
          rounded-2xl
          border border-white/70
          bg-white/45
          px-6
          shadow-[0_8px_32px_rgba(31,38,135,0.08)]
          backdrop-blur-2xl
          backdrop-saturate-150
          md:px-8
        "
      >
        {/* Glossy top reflection */}
        <div
          className="
            pointer-events-none
            absolute inset-x-4 top-0 h-px
            rounded-full
            bg-linear-to-r
            from-transparent via-white to-transparent
          "
        />

        {/* Soft glass highlight */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-full
            bg-linear-to-b
            from-white/30 via-transparent to-transparent
          "
        />

        {/* Logo */}
        <a
          href="#top"
          className="group relative flex items-center gap-2"
        >
          <div
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              bg-slate-800
              font-sans
              text-sm
              font-bold
              tracking-tighter
              text-white
              shadow-lg
              shadow-slate-950/15
              transition-transform duration-200
              group-hover:scale-105
            "
          >
            DC
          </div>
        </a>

        {/* Navigation */}
        <div
          className="
            absolute left-1/2 hidden -translate-x-1/2
            items-center space-x-8
            md:flex
          "
        >
          <a
            href="#experience"
            className="
              text-xs font-semibold uppercase tracking-widest
              text-slate-500
              transition-colors duration-200
              hover:text-slate-950
            "
          >
            Experience
          </a>

          <a
            href="#projects"
            className="
              text-xs font-semibold uppercase tracking-widest
              text-slate-500
              transition-colors duration-200
              hover:text-slate-950
            "
          >
            Projects
          </a>

          <a
            href="#achievements"
            className="
              text-xs font-semibold uppercase tracking-widest
              text-slate-500
              transition-colors duration-200
              hover:text-slate-950
            "
          >
            Achievements
          </a>

          <a
            href="#contact"
            className="
              text-xs font-semibold uppercase tracking-widest
              text-slate-500
              transition-colors duration-200
              hover:text-slate-950
            "
          >
            Contact
          </a>
        </div>

        {/* Resume */}
        <a
          href="/Devi_Chandu_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative flex items-center gap-2
            rounded-full
            border border-slate-900
            bg-slate-950
            px-5 py-2.5
            text-xs font-bold tracking-widest text-white
            shadow-[0_6px_20px_rgba(15,23,42,0.18)]
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-slate-800
            hover:shadow-[0_10px_25px_rgba(15,23,42,0.22)]
          "
        >
          RESUME

          <ArrowUpRight
            size={13}
            className="
              text-slate-400
              transition-transform duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </a>
      </nav>
    </header>
  );
}
