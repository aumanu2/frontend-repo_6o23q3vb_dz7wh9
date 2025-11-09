import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon UI Kit',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'AI Art Studio',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    stack: ['Python', 'FastAPI', 'Stable Diffusion'],
  },
  {
    title: 'XR Playground',
    image: 'https://images.unsplash.com/photo-1668561791354-b299b018abbc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxYUiUyMFBsYXlncm91bmR8ZW58MHwwfHx8MTc2MjcwMzU0MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    stack: ['Three.js', 'WebXR'],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative bg-[#020A14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#E6F1FF]">Featured Projects</h2>
          <a href="#" className="text-[#00FFFF] hover:text-[#FF00FF] transition">View all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#0A192F]/60 backdrop-blur-xl border border-white/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A14] via-[#020A14]/10 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#E6F1FF]">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/5 text-[#E6F1FF]/80 border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#00FFFF] hover:text-[#FF00FF] transition"
                  >
                    View case study
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
