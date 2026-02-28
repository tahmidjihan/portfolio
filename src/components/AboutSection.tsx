'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutSection() {
  const imageAnim = useScrollAnimation({ threshold: 0.2 })
  const contentAnim = useScrollAnimation({ threshold: 0.2 })
  const cardsAnim = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-32 bg-zinc-900/30" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageAnim.ref}
            className={`relative group animate-on-scroll-left ${imageAnim.isVisible ? 'is-visible' : ''}`}
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition duration-500"></div>
            <div className="relative aspect-[4/5] bg-zinc-800 rounded-2xl overflow-hidden border border-white/10">
              <img 
                alt="Portrait of Tahmid Jihan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
                src="tahmid.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-sm font-medium tracking-widest uppercase">Full-Stack Developer</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentAnim.ref}
            className={`animate-on-scroll-right ${contentAnim.isVisible ? 'is-visible' : ''}`}
          >
            <h2 className="text-4xl font-bold font-display mb-8 relative inline-block">
              Professional Profile
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Tahmid Jihan is a versatile Full-Stack Web Developer and entrepreneur known for building high-performance, scalable digital solutions. He specializes in modern web architectures and has a proven track record of working with international companies, particularly within the Australian market.
              </p>
              <p>
                Tahmid possesses a robust technical stack that extends beyond traditional web development, including React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Supabase, MongoDB (MERN Stack), Linux environments, and UI/UX design focused on creating intuitive and seamless user experiences.
              </p>
              <p>
                His career is marked by rapid progression through various international roles, from freelance web development to founding his own startup, demonstrating adaptability and entrepreneurial spirit.
              </p>
            </div>
            
            <div 
              ref={cardsAnim.ref}
              className={`mt-10 grid grid-cols-2 gap-4 animate-on-scroll stagger-2 ${cardsAnim.isVisible ? 'is-visible' : ''}`}
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="font-bold text-white mb-1">Technical Expertise</h4>
                <p className="text-sm text-slate-500">React, Next.js, Node.js, PostgreSQL</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="font-bold text-white mb-1">Current Focus</h4>
                <p className="text-sm text-slate-500">Teacup Website Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
