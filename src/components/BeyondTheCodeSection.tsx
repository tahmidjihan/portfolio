'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BeyondTheCodeSection() {
  return (
    <section className="py-32 border-t border-white/5" id="beyond-the-code">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Personal Interests & Hobbies</h2>
          <p className="text-slate-400">Tahmid is a polymath with a deep appreciation for the intersection of logic and creativity</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Music Production */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">music_note</span>
              </div>
              <h3 className="text-2xl font-bold font-display">Orchestral Music</h3>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              His primary hobby is creating orchestral music, showcasing a sophisticated level of musical composition and arrangement. He explores the intersection of technology and artistry through sophisticated audio experiences.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Composition</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Arrangement</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Digital Audio</span>
            </div>
          </div>
          
          {/* Creative Writing */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">edit</span>
              </div>
              <h3 className="text-2xl font-bold font-display">Creative Arts</h3>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              He also explores abstract art and songwriting, combining visual creativity with lyrical expression. His work spans multiple creative mediums, showcasing versatility and artistic depth.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Abstract Art</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Writting</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Creative Expression</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
