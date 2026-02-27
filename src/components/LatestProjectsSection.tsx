export default function LatestProjectsSection() {
  const projects = [
    {
      title: "Nexus Dashboard",
      description: "A comprehensive analytics dashboard for monitoring business metrics and KPIs in real-time. Features interactive charts, data visualization, and customizable widgets.",
      tags: ["REACT", "TAILWIND", "CHART.JS"],
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Ethereal Elements", 
      description: "An interactive web experience showcasing CSS animations and creative coding techniques. Explores the boundaries between art and technology through visual experiments.",
      tags: ["VANILLA JS", "CSS", "WEBGL"],
      year: "2023",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Lumina Commerce",
      description: "A modern e-commerce platform with advanced filtering, secure payment processing, and responsive design. Optimized for performance and user experience.",
      tags: ["NEXT.JS", "STRIPE", "POSTGRESQL"],
      year: "2023",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section className="py-32 bg-zinc-900/30" id="latest-projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Latest Projects</h2>
          <p className="text-slate-400">Recent work and creative experiments</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group h-[500px]">
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative aspect-[16/10] bg-zinc-800 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-slate-600">image</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold font-display">{project.title}</h3>
                    <span className="text-sm text-slate-500">{project.year}</span>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Live Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors group/link flex-shrink-0"
                  >
                    <span className="text-sm font-medium">View Live</span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full hover:border-primary transition-colors group"
          >
            <span className="text-white group-hover:text-primary transition-colors">View All Projects</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
