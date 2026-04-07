'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutSection() {
  const imageAnim = useScrollAnimation({ threshold: 0.2 })
  const contentAnim = useScrollAnimation({ threshold: 0.2 })
  const cardsAnim = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-32 lg:py-40 bg-bg-secondary" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-text-primary">
            Professional Profile
          </h2>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Photo Column - 2 cols */}
          <div
            ref={imageAnim.ref}
            className={`lg:col-span-2 animate-on-scroll-left ${imageAnim.isVisible ? 'is-visible' : ''}`}
          >
            <div className="relative group">
              {/* Accent glow behind photo */}
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl group-hover:bg-accent/15 transition-all duration-700" />
              
              {/* Photo Container */}
              <div className="relative aspect-[4/5] bg-bg-tertiary rounded-2xl overflow-hidden border border-border-subtle">
                <img
                  alt="Portrait of Tahmid Jihan"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="tahmid.png"
                />
              </div>

              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4">
                <p className="text-text-primary text-sm font-medium tracking-widest uppercase">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Content Column - 3 cols */}
          <div
            ref={contentAnim.ref}
            className={`lg:col-span-3 animate-on-scroll-right ${contentAnim.isVisible ? 'is-visible' : ''}`}
          >
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
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

            {/* Expertise Cards */}
            <div
              ref={cardsAnim.ref}
              className={`mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-on-scroll stagger-2 ${cardsAnim.isVisible ? 'is-visible' : ''}`}
            >
              <div className="p-6 rounded-xl bg-bg-tertiary border border-border-subtle hover:border-accent/30 transition-all duration-500 group">
                <h4 className="font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">Technical Expertise</h4>
                <p className="text-sm text-text-tertiary">React, Next.js, Node.js, PostgreSQL</p>
              </div>
              <div className="p-6 rounded-xl bg-bg-tertiary border border-border-subtle hover:border-accent/30 transition-all duration-500 group">
                <h4 className="font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">Current Focus</h4>
                <p className="text-sm text-text-tertiary">Teacup Website Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
