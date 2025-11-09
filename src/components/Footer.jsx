export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-[#020A14] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[#E6F1FF]/70">© {year} Shehryar Asif. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#E6F1FF] transition"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#E6F1FF] transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#E6F1FF] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
