'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ProjectsSection() {
  return (
    <section className="py-32 border-t border-white/5" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-display mb-16 text-center">Featured Project</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="flex items-center justify-center aspect-square md:aspect-auto md:h-96 bg-primary/10 rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 text-center">
              <span className="material-symbols-outlined text-[120px] text-primary mb-4 block">coffee</span>
              <p className="text-2xl font-bold font-display tracking-tight text-primary">Teacup</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-primary text-sm font-semibold tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span>Featured Development</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold font-display leading-tight">Teacup Website Platform</h3>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              Teacup is a platform designed to lower the barrier to entry for businesses needing a digital presence. Tahmid provides websites for free with a nominal $30/month fee for access to specialized management dashboard, combining technical expertise with entrepreneurial vision.
            </p>
            
            <div className="pt-6 flex flex-wrap gap-6 items-center">
              <a 
                href="https://teacup.website" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-indigo-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Launch Project
              </a>
              <a 
                href="#" 
                className="group flex items-center space-x-2 text-white font-medium hover:text-primary transition-colors"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
