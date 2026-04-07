'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Spinner from './Spinner';

export default function HeroSection() {
  const titleAnim = useScrollAnimation({ threshold: 0.1 });
  const subtitleAnim = useScrollAnimation({ threshold: 0.1 });
  const descAnim = useScrollAnimation({ threshold: 0.1 });
  const socialAnim = useScrollAnimation({ threshold: 0.1 });
  const [isLoading, setIsLoading] = useState(false);

  const scrollToNext = () => {
    setIsLoading(true);
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-bg-primary"
      id="home"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        {/* Name - Dramatic Typography */}
        <div
          ref={titleAnim.ref}
          className={`mb-8 animate-on-scroll ${titleAnim.isVisible ? 'is-visible' : ''}`}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-2">
            <span className="text-text-primary">TAHMID </span>
            <span className="text-text-tertiary">JIHAN</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleAnim.ref}
          className={`mb-10 animate-on-scroll stagger-2 ${subtitleAnim.isVisible ? 'is-visible' : ''}`}
        >
          <p className="text-xl md:text-2xl text-accent font-medium tracking-wide">
            Full-Stack Web Developer & Entrepreneur
          </p>
        </div>

        {/* Description */}
        <div
          ref={descAnim.ref}
          className={`mb-14 animate-on-scroll stagger-3 ${descAnim.isVisible ? 'is-visible' : ''}`}
        >
          <p className="max-w-2xl mx-auto text-text-secondary leading-relaxed text-lg md:text-xl">
            Building high-performance, scalable digital solutions with a proven
            track record of working with international companies.
          </p>
        </div>

        {/* Social Links - Circular Icons */}
        <div
          ref={socialAnim.ref}
          className={`flex items-center justify-center space-x-5 animate-on-scroll stagger-4 ${socialAnim.isVisible ? 'is-visible' : ''}`}
        >
          <a
            href="https://github.com/tahmidjihan"
            target="_blank"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-border-subtle text-text-secondary hover:border-accent/50 hover:text-accent transition-all duration-500 hover:bg-accent-muted"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="mailto:tahmid@teacup.website"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-border-subtle text-text-secondary hover:border-accent/50 hover:text-accent transition-all duration-500 hover:bg-accent-muted"
            aria-label="Email"
          >
            <span className="material-symbols-outlined text-2xl">mail</span>
          </a>

          <a
            href="https://teacup.website"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-border-subtle text-text-secondary hover:border-accent/50 hover:text-accent transition-all duration-500 hover:bg-accent-muted"
            aria-label="Teacup Website"
          >
            <span className="material-symbols-outlined text-2xl">language</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="mt-24 flex flex-col items-center justify-center mx-auto text-text-tertiary hover:text-accent transition-colors duration-300 group"
          aria-label="Scroll to next section"
        >
          <span className="text-xs tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
          {isLoading ? (
            <Spinner size="sm" />
          ) : (
            <span className="material-symbols-outlined animate-bounce">
              expand_more
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
