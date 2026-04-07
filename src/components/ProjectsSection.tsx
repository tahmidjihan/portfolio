'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import featuredWorks from '@/data/featuredWorks.json'

export default function ProjectsSection() {
  return (
    <section className="py-32 border-t border-white/5" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-display mb-16 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {featuredWorks.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10] bg-primary/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-indigo-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm">{project.category}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                    {project.techStack}
                  </span>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center space-x-1 text-white text-sm font-medium hover:text-primary transition-colors"
                    >
                      <span>Visit</span>
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
