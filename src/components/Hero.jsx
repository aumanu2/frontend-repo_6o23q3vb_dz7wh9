import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#020A14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for depth - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020A14]/20 via-transparent to-[#020A14]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-12 items-center gap-10">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-wide leading-tight text-[#E6F1FF]"
          >
            <span className="block">Shehryar Asif.</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">I build digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg text-[#E6F1FF]/80 max-w-2xl"
          >
            Creative Technologist blending engineering, design, and AI to craft interactive products with impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-[#020A14] font-semibold bg-[#00FFFF] overflow-hidden group"
            >
              <span className="relative z-10">See My Work</span>
              <span className="absolute inset-0 bg-[#FF00FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#about" className="text-[#E6F1FF]/80 hover:text-[#00FFFF] transition">About me</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
