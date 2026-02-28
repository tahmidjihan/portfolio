'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function LatestProjectsSection() {
  return (
    <section className="py-32 bg-zinc-900/30" id="latest-projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Current Projects</h2>
          <p className="text-slate-400">Featured work and ongoing developments</p>
        </div>
        
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary text-sm font-semibold tracking-widest uppercase">
             
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
      </div>
    </section>
  );
}
