'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative mx-auto max-w-5xl scroll-mt-28 px-6 py-12 font-sans"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
          LEADERSHIP & RESPONSIBILITY
        </span>

        <h2 className="mt-2 font-serif text-3xl font-light text-slate-900 md:text-4xl">
          Community & Mentorship
        </h2>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border border-white/70
          bg-white/45
          shadow-[0_8px_32px_rgba(31,38,135,0.08)]
          backdrop-blur-2xl
          backdrop-saturate-150
          transition-all
          duration-300
          hover:bg-white/55
          hover:shadow-[0_16px_40px_rgba(31,38,135,0.12)]
        "
      >
        {/* Top Gloss */}
        <div
          className="
            pointer-events-none
            absolute inset-x-4 top-0
            z-30 h-px
            rounded-full
            bg-linear-to-r
            from-transparent via-white to-transparent
          "
        />

        {/* ─────────────────────────────
            CODE CLUB PHOTO
        ───────────────────────────── */}
        <div className="relative h-64 w-full overflow-hidden md:h-80">
          <Image
            src="/codeclub.jpeg"
            alt="Code Club community at RGUKT Basar"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
          />

          {/* Soft image gradient */}
          <div
            className="
              absolute inset-0
              bg-linear-to-t
              from-slate-950/55
              via-slate-950/10
              to-transparent
            "
          />

          {/* Top glass label */}
          <div
            className="
              absolute left-5 top-5
              rounded-full
              border border-white/70
              bg-white/20
              px-4 py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              shadow-sm
              backdrop-blur-xl
            "
          >
            CODE CLUB
          </div>

          {/* Bottom image caption */}
          <div className="absolute bottom-5 left-6 right-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Rajiv Gandhi University of Knowledge Technologies
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              Building a culture of technology & collaboration
            </p>
          </div>
        </div>

        {/* ─────────────────────────────
            CONTENT
        ───────────────────────────── */}
        <div className="p-8 md:p-10">
          {/* Header */}
          <div
            className="
              flex
              flex-col
              justify-between
              gap-5
              border-b
              border-slate-200/70
              pb-6
              md:flex-row
              md:items-center
            "
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/80
                        bg-white/70
                        shadow-sm
                        backdrop-blur-xl
                    "
                    >
                    <Image
                        src="/codeclub-logo.jpeg"
                        alt="Code Club logo"
                        width={40}
                        height={40}
                        className="h-12 w-12 object-contain"
                    />
                </div>

              {/* Title */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Code Club President
                </h3>

                <p
                  className="
                    mt-0.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-indigo-600
                  "
                >
                  RGUKT, Basar
                </p>
              </div>
            </div>

            {/* Date */}
            <span
              className="
                self-start
                rounded-full
                border border-white/80
                bg-white/70
                px-4 py-1.5
                text-xs
                font-semibold
                text-slate-700
                shadow-sm
                backdrop-blur-xl
                md:self-auto
              "
            >
              2023 – 2024
            </span>
          </div>

          {/* Responsibilities */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-1 select-none text-indigo-500">•</span>

              <span>
                Led student developer community, organizing coding hackathons,
                technical workshops, and peer mentorship sessions.
              </span>
            </li>

            <li className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-1 select-none text-indigo-500">•</span>

              <span>
                Mentored 300+ junior students in Data Structures, Algorithms,
                and Web Application Development pipelines.
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom Reflection */}
        <div
          className="
            pointer-events-none
            absolute inset-x-10 bottom-0
            h-px
            bg-linear-to-r
            from-transparent via-white to-transparent
          "
        />
      </motion.div>
    </section>
  );
}