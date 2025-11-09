import { useEffect, useState } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#0A192F]/60 py-2 shadow-[0_8px_30px_rgb(2,10,20,0.35)]' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00FFFF] to-[#FF00FF] grid place-items-center shadow-lg group-hover:scale-105 transition">
            <Rocket size={18} className="text-[#020A14]" />
          </div>
          <span className="font-semibold tracking-widest text-[#E6F1FF]">SHEHRYAR</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-[#E6F1FF]/80 hover:text-[#00FFFF] transition">Home</a>
          <a href="#about" className="text-[#E6F1FF]/80 hover:text-[#00FFFF] transition">About</a>
          <a href="#projects" className="text-[#E6F1FF]/80 hover:text-[#00FFFF] transition">Projects</a>
          <a href="#contact" className="text-[#E6F1FF]/80 hover:text-[#00FFFF] transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-[#E6F1FF]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-[#E6F1FF]"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
