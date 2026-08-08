'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Achievement {
  title: string;
  organizer: string;
  year: string;
  description: string;
  image: string;
  badge: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Smart India Hackathon (SIH) Finalist',
    organizer: 'Ministry of Education & AICTE',
    year: '2024',
    description:
      'Surpassed 110+ competing teams nationwide to qualify for the national finals with an AI-driven solution.',
    image: '/sih2024.jpg',
    badge: 'National Finalist',
  },
  {
    title: 'Smart India Hackathon (SIH) Finalist',
    organizer: 'Ministry of Education & AICTE',
    year: '2023',
    description:
      'Selected among top teams across India for high-scale prototype development addressing real-world problem statements.',
    image: '/sih2023.jpg',
    badge: 'National Finalist',
  },
  {
    title: 'Krithioathon Hackathon Finalist',
    organizer: 'VNRVJIET',
    year: '2024',
    description:
      'Shortlisted as top finalist for engineering high-performance software prototype under strict deadline constraints.',
    image: '/krithioathon.jpg',
    badge: 'Top Finalist',
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative mx-auto max-w-5xl scroll-mt-28 px-6 py-24 font-sans"
    >
      {/* Section Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
          RECOGNITION
        </span>

        <h2 className="mt-2 font-serif text-4xl font-light text-slate-900 md:text-5xl">
          Honors & Achievements
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
          A collection of milestones, competitions, and engineering
          achievements.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true, margin: '-40px' }}
            className="
              group
              relative
              flex
              flex-col
              justify-between
              overflow-hidden
              rounded-3xl
              border
              border-white/70
              bg-white/45
              shadow-[0_8px_32px_rgba(31,38,135,0.08)]
              backdrop-blur-2xl
              backdrop-saturate-150
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/55
              hover:shadow-[0_16px_40px_rgba(31,38,135,0.12)]
            "
          >
            {/* Glossy Top Edge */}
            <div
              className="
                pointer-events-none
                absolute inset-x-4 top-0
                z-20
                h-px
                rounded-full
                bg-linear-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Subtle Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />

              {/* Achievement Badge */}
              <div
                className="
                  absolute left-3 top-3
                  rounded-full
                  border border-white/80
                  bg-white/75
                  px-3 py-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-700
                  shadow-sm
                  backdrop-blur-xl
                "
              >
                {item.badge}
              </div>

              {/* Year */}
              <div
                className="
                  absolute right-3 top-3
                  rounded-full
                  border border-white/30
                  bg-slate-950/80
                  px-2.5 py-1
                  text-[10px]
                  font-semibold
                  text-white
                  shadow-sm
                  backdrop-blur-md
                "
              >
                {item.year}
              </div>
            </div>

            {/* Text Content */}
            <div className="p-6">
              <span
                className="
                  block
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                {item.organizer}
              </span>

              <h3 className="mt-1 text-lg font-bold leading-snug text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>

            {/* Bottom Glass Reflection */}
            <div
              className="
                pointer-events-none
                absolute inset-x-8 bottom-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white/80
                to-transparent
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}