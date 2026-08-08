'use client';

import {
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGooglecloud,
  SiGithubactions,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'FastAPI', icon: <SiFastapi /> },

  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'SQL', icon: <SiMysql /> },

  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },

  { name: 'React', icon: <SiReact /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },

  { name: 'Google Cloud', icon: <SiGooglecloud /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
];

export default function Skills() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="relative z-10 py-10 font-sans"
    >
      {/* Section Label */}
      <div className="mb-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
          TECHNOLOGIES
        </span>
      </div>

     {/* Marquee viewport */}
            <div className="relative w-full overflow-hidden py-4">

            {/* Left fade */}
            <div
                className="
                pointer-events-none
                absolute inset-y-0 left-0 z-20
                w-16
                bg-linear-to-r
                from-white
                via-white/80
                to-transparent
                md:w-32
                "
            />

            {/* Right fade */}
            <div
                className="
                pointer-events-none
                absolute inset-y-0 right-0 z-20
                w-16
                bg-linear-to-l
                from-white
                via-white/80
                to-transparent
                md:w-32
                "
            />

            {/* Scrolling track */}
            <div className="skills-marquee flex w-max items-center gap-4 px-4 py-2">
                {marqueeSkills.map((skill, index) => (
                <div
                    key={`${skill.name}-${index}`}
                    className="
                    group
                    flex
                    h-14
                    shrink-0
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/80
                    bg-white/60
                    px-5
                    shadow-[0_6px_24px_rgba(31,38,135,0.06)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-0.5
                    hover:bg-white/90
                    hover:shadow-[0_10px_30px_rgba(31,38,135,0.12)]
                    "
                >
                    <span
                    className="
                        text-xl
                        text-slate-700
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                    >
                    {skill.icon}
                    </span>

                    <span
                    className="
                        whitespace-nowrap
                        text-xs
                        font-semibold
                        tracking-wide
                        text-slate-600
                    "
                    >
                    {skill.name}
                    </span>
                </div>
                ))}
            </div>
            </div>

      <style jsx>{`
        .skills-marquee {
          animation: skills-scroll 35s linear infinite;
        }

        .skills-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes skills-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}