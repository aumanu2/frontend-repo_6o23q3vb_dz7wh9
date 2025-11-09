import { motion } from 'framer-motion';
import { Code2, Palette, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Code2,
    desc: 'High-performance, scalable apps using modern stacks and best practices.',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    desc: 'Human-centered design with bold aesthetics and frictionless flows.',
  },
  {
    title: 'AI Integration',
    icon: Cpu,
    desc: 'Bring intelligent features to products with LLMs and ML systems.',
  },
];

export default function Services() {
  return (
    <section className="bg-[#020A14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#E6F1FF] mb-10">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-[#0A192F]/60 backdrop-blur-xl border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FFFF] to-[#FF00FF] grid place-items-center text-[#020A14] shadow-lg">
                {<s.icon size={22} />}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#E6F1FF]">{s.title}</h3>
              <p className="mt-2 text-[#E6F1FF]/70">{s.desc}</p>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#00FFFF]/10 blur-2xl group-hover:scale-125 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
