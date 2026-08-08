'use client';

import { motion } from 'framer-motion';

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#f8fafc]">
      
      {/* 1. Subtle warm ambient base glow (Top Left) */}
      <div className="absolute -top-20 -left-20 w-150 h-150 bg-amber-100/60 rounded-full blur-[130px]" />

      {/* 
        2. DIAGONAL BEAM CONTAINER
        Rotated at -35deg to match the angled rays in the reference image
      */}
      <div className="absolute inset-0 flex items-center justify-center rotate-[-35deg] scale-150">
        
        {/* Beam 1: Soft Indigo Ray */}
        <motion.div
          animate={{
            x: ['-120%', '120%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-55 h-[2200px] bg-linear-to-r from-transparent via-indigo-400/45 to-transparent blur-[65px] opacity-75"
        />

        {/* Beam 2: Soft Sky Blue Streak */}
        <motion.div
          animate={{
            x: ['-120%', '120%'],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'linear',
            delay: 2.5,
          }}
          className="w-70 h-[2200px] bg-linear-to-r from-transparent via-sky-300/55 to-transparent blur-[70px] opacity-80 -ml-28"
        />

        {/* Beam 3: Cyan Prism Beam */}
        <motion.div
          animate={{
            x: ['-120%', '120%'],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'linear',
            delay: 5.5,
          }}
          className="w-45 h-[2200px] bg-linear-to-r from-transparent via-cyan-300/50 to-transparent blur-[60px] opacity-75 -ml-36"
        />

        {/* Beam 4: Soft Purple Accent */}
        <motion.div
          animate={{
            x: ['-120%', '120%'],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: 'linear',
            delay: 9,
          }}
          className="w-[320px] h-[2200px] bg-linear-to-r from-transparent via-purple-400/40 to-transparent blur-[75px] opacity-70 -ml-20"
        />

      </div>

      {/* 3. Soft vignette overlay to ensure pristine readability */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-white/35 pointer-events-none" />
    </div>
  );
}