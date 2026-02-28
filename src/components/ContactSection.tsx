'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactSection() {
  return (
    <section className="py-32 bg-zinc-900/30" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Current Projects: Teacup Website</h2>
          <p className="text-slate-400">Tahmid is currently spearheading teacup.website, a project designed to lower the barrier to entry for businesses needing a digital presence.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display">The Model</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                He provides websites for free, charging only a nominal fee of $30 a month for access to a specialized management dashboard.
              </p>
              
              <div className="space-y-4">
                <div className="">
                  <h4 className="font-bold text-white mb-2">Features</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>• Free website hosting</li>
                    <li>• Management dashboard access</li>
                    <li>• $30/month subscription</li>
                    <li>• Technical support included</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold font-display mb-6 text-primary">Get In Touch</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                For inquiries regarding this project or professional collaboration, he can be reached at tahmid@teacup.website.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:tahmid@teacup.website" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">mail</span>
                  <span>tahmid@teacup.website</span>
                </a>
                
                <a 
                  href="https://teacup.website" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">language</span>
                  <span>Visit Teacup Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
