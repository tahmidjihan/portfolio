export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-zinc-950/70">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter font-display">
          <span className="text-primary">T</span>J
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <button className="md:hidden p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
