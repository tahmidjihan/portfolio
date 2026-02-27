export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-xl font-bold font-display">
          <span className="text-primary">T</span>J
        </div>
        <p className="text-slate-500 text-sm">
          © 2024 Tahmid Jihan. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            Github
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
