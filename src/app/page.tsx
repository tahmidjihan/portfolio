'use client';

import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleUp,
  staggerContainer,
  opacityOnly,
} from '@/animations/variants';
import CursorFollower from '@/components/CursorFollower';
import MusicVisualizer from '@/components/MusicVisualizer';
import featuredWorks from '@/data/featuredWorks.json';
import { FaReact, FaNodeJs, FaGitAlt, FaLinux, FaFigma } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
} from 'react-icons/si';

function AnimatedSection({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: typeof fadeInUp;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggeredSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

function FeaturedProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(featuredWorks.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = featuredWorks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of projects section
    document
      .getElementById('work')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className='py-40 md:py-60 px-6 md:px-12 bg-black' id='work'>
      <AnimatedSection className='flex justify-between items-end mb-24 md:mb-32 border-b border-[#914110] pb-12'>
        <h2 className='text-6xl md:text-8xl font-serif text-white'>
          Featured Work
        </h2>
        <motion.span
          className='font-technical text-sm text-[#914110]'
          variants={fadeInRight}
        >
          {String(currentPage).padStart(2, '0')} /{' '}
          {String(totalPages).padStart(2, '0')}
        </motion.span>
      </AnimatedSection>

      <AnimatePresence mode='wait'>
        <StaggeredSection
          key={currentPage}
          className='grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-32 md:gap-y-40'
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className='group cursor-pointer'
              variants={fadeInUp}
              initial='hidden'
              animate='visible'
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className='relative overflow-hidden mb-8 md:mb-10 aspect-[16/10] bg-neutral-900'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  alt={project.title}
                  className='w-full h-full object-cover grayscale group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000'
                  src={project.image}
                />
                {project.liveLink && (
                  <motion.div
                    className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className='flex items-center gap-4'>
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-6 py-3 bg-[#914110] text-white font-bold font-technical text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300'
                        onClick={(e) => e.stopPropagation()}
                      >
                        LIVE DEMO
                      </a>
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='px-6 py-3 border-2 border-white text-white font-bold font-technical text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300'
                          onClick={(e) => e.stopPropagation()}
                        >
                          GITHUB
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-3xl md:text-4xl font-serif text-white mb-3'>
                    {project.title}
                  </h3>
                  <p className='font-sans text-sm text-[#CCCCCC] uppercase tracking-widest'>
                    {project.category}
                  </p>
                </div>
                <span className='font-technical text-xs text-[#914110]'>
                  {project.techStack}
                </span>
              </div>
            </motion.div>
          ))}
        </StaggeredSection>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <AnimatedSection className='mt-24 md:mt-32 flex justify-center items-center gap-4'>
          <motion.button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-6 py-3 border border-[#914110] text-[#914110] font-technical text-xs tracking-widest hover:bg-[#914110] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#914110]'
            whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
          >
            <span className='material-symbols-outlined text-sm'>
              chevron_left
            </span>
          </motion.button>

          <div className='flex gap-2'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 font-technical text-xs tracking-widest transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-[#914110] text-white'
                    : 'border border-[#914110] text-[#914110] hover:bg-[#914110] hover:text-white'
                }`}
                whileHover={{ scale: currentPage === page ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {String(page).padStart(2, '0')}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-6 py-3 border border-[#914110] text-[#914110] font-technical text-xs tracking-widest hover:bg-[#914110] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#914110]'
            whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
          >
            <span className='material-symbols-outlined text-sm'>
              chevron_right
            </span>
          </motion.button>
        </AnimatedSection>
      )}
    </section>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const [navBg, setNavBg] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.02) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  });

  const handleMusicClick = () => {
    setCurrentTrackIndex(currentTrackIndex === null ? 0 : null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'work', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'tech-stack', label: 'TECH STACK' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <div ref={containerRef}>
      <CursorFollower />

      {/* Navigation */}
      <motion.nav
        className='fixed top-0 w-full z-50 backdrop-blur-2xl'
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: navBg ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.3)',
        }}
        transition={{
          y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.6 },
          backgroundColor: { duration: 0.3 },
        }}
      >
        <div className='max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20'>
          <div className='flex items-center justify-between h-full'>
            {/* Logo - Left */}
            <motion.div
              className='text-2xl font-serif tracking-tighter text-white'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className='text-[#914110]'>T</span>J
            </motion.div>

            {/* Desktop Navigation - Right */}
            <motion.div
              className='hidden md:flex gap-2'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  className='px-4 py-2 text-[#CCCCCC] hover:text-white hover:bg-neutral-800 rounded-md transition-all duration-300 font-technical text-xs tracking-[0.2em] cursor-pointer'
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden p-2 text-white'
              aria-label='Toggle menu'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className='material-symbols-outlined block'
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? 'close' : 'menu'}
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className='md:hidden bg-black/95 backdrop-blur-xl border-t border-neutral-900'
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.3 },
              }}
            >
              <div className='px-6 py-4 space-y-1'>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    className='block w-full text-left px-4 py-3 rounded-md text-base font-technical tracking-[0.2em] text-[#CCCCCC] hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer'
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className='min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden'>
          <motion.div
            className='z-10 relative'
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          >
            <motion.span
              className='font-technical text-xs text-[#914110] block mb-8'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              FULL-STACK WEB DEVELOPER &amp; ENTREPRENEUR
            </motion.span>
            <motion.h1
              className='hero-title font-serif text-white mb-12'
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Tahmid Jihan
            </motion.h1>
            <motion.div
              className='flex flex-col md:flex-row md:items-end justify-between gap-12'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className='font-sans text-xl text-[#CCCCCC] max-w-xl leading-relaxed'>
                Building high-performance, scalable digital solutions with a
                proven track record of working with international companies.
              </p>
              <motion.div
                className='shrink-0'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  className='inline-block px-12 py-5 bg-[#914110] text-white font-bold font-technical text-xs tracking-[0.4em] hover:bg-white transition-all duration-500'
                  href='/resume.docx'
                  download
                >
                  DOWNLOAD RESUME
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className='absolute right-0 top-0 w-1/2 h-full opacity-40 pointer-events-none [mask-image:linear-gradient(to_left,black_40%,transparent_100%)]'
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              alt='Tahmid Jihan'
              className='w-full h-full object-cover grayscale contrast-150'
              src='/tahmid.png'
            />
          </motion.div>
        </section>

        {/* About Section */}
        <section
          className='py-40 md:py-60 px-6 md:px-12 bg-black border-y border-neutral-900'
          id='about'
        >
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start'>
            <AnimatedSection
              className='md:w-1/3 md:sticky md:top-32'
              variant={fadeInLeft}
            >
              <h2 className='text-5xl md:text-6xl font-serif text-white leading-tight'>
                Professional Profile
              </h2>
            </AnimatedSection>
            <div className='md:w-2/3'>
              <AnimatedSection variant={fadeInRight} delay={0.1}>
                <p className='font-sans text-2xl md:text-3xl text-neutral-200 leading-relaxed mb-16 md:mb-20'>
                  Tahmid Jihan is a versatile Full-Stack Web Developer and
                  entrepreneur known for building high-performance, scalable
                  digital solutions. He specializes in modern web architectures
                  and has a proven track record of working with international
                  companies, particularly within the Australian market.
                </p>
              </AnimatedSection>
              <StaggeredSection className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20'>
                <motion.div
                  className='border-t border-[#914110] pt-8'
                  variants={fadeInUp}
                >
                  <span className='font-technical text-xs text-[#914110] block mb-6'>
                    TECHNICAL STACK
                  </span>
                  <p className='font-sans text-base text-[#CCCCCC] leading-relaxed'>
                    React, Next.js, TypeScript, Node.js, Express, PostgreSQL,
                    Supabase, MongoDB (MERN Stack), Linux environments, and
                    UI/UX design.
                  </p>
                </motion.div>
                <motion.div
                  className='border-t border-[#914110] pt-8'
                  variants={fadeInUp}
                >
                  <span className='font-technical text-xs text-[#914110] block mb-6'>
                    CURRENT FOCUS
                  </span>
                  <p className='font-sans text-base text-[#CCCCCC] leading-relaxed'>
                    Teacup Website Platform — lowering the barrier to entry for
                    businesses needing a digital presence.
                  </p>
                </motion.div>
              </StaggeredSection>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          className='py-40 md:py-60 px-6 md:px-12 bg-neutral-950 border-y border-neutral-900'
          id='tech-stack'
        >
          <div className='max-w-7xl mx-auto'>
            <AnimatedSection className='flex justify-between items-end mb-24 md:mb-32 border-b border-[#914110] pb-12'>
              <h2 className='text-6xl md:text-8xl font-serif text-white'>
                Technical Arsenal
              </h2>
              <motion.span
                className='font-technical text-sm text-[#914110]'
                variants={fadeInRight}
              >
                TOOLS & TECHNOLOGIES
              </motion.span>
            </AnimatedSection>

            {/* Frontend */}
            <AnimatedSection className='mb-20 md:mb-32'>
              <span className='font-technical text-xs text-[#914110] block mb-12 tracking-[0.3em]'>
                FRONTEND DEVELOPMENT
              </span>
              <StaggeredSection className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                {[
                  { name: 'React', level: 'Expert', icon: FaReact },
                  { name: 'Next.js', level: 'Expert', icon: SiNextdotjs },
                  { name: 'TypeScript', level: 'Expert', icon: SiTypescript },
                  {
                    name: 'Tailwind CSS',
                    level: 'Expert',
                    icon: SiTailwindcss,
                  },
                ].map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className='group relative bg-neutral-900 border border-neutral-800 p-8 md:p-10 hover:border-[#914110] transition-all duration-500 cursor-default'
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <motion.div
                        className='text-5xl md:text-6xl text-white mb-6 group-hover:text-[#914110] transition-colors duration-500'
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <h3 className='font-serif text-2xl text-white mb-3'>
                        {tech.name}
                      </h3>
                      <p className='font-technical text-xs text-[#914110] tracking-widest'>
                        {tech.level}
                      </p>
                      <motion.div
                        className='absolute bottom-0 left-0 w-full h-1 bg-[#914110] origin-left'
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  );
                })}
              </StaggeredSection>
            </AnimatedSection>

            {/* Backend & Database */}
            <AnimatedSection className='mb-20 md:mb-32'>
              <span className='font-technical text-xs text-[#914110] block mb-12 tracking-[0.3em]'>
                BACKEND & DATABASE
              </span>
              <StaggeredSection className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                {[
                  { name: 'Node.js', level: 'Expert', icon: FaNodeJs },
                  { name: 'Express', level: 'Advanced', icon: SiExpress },
                  { name: 'PostgreSQL', level: 'Advanced', icon: SiPostgresql },
                  { name: 'MongoDB', level: 'Expert', icon: SiMongodb },
                ].map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className='group relative bg-neutral-900 border border-neutral-800 p-8 md:p-10 hover:border-[#914110] transition-all duration-500 cursor-default'
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <motion.div
                        className='text-5xl md:text-6xl text-white mb-6 group-hover:text-[#914110] transition-colors duration-500'
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <h3 className='font-serif text-2xl text-white mb-3'>
                        {tech.name}
                      </h3>
                      <p className='font-technical text-xs text-[#914110] tracking-widest'>
                        {tech.level}
                      </p>
                      <motion.div
                        className='absolute bottom-0 left-0 w-full h-1 bg-[#914110] origin-left'
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  );
                })}
              </StaggeredSection>
            </AnimatedSection>

            {/* Tools & Platforms */}
            <AnimatedSection>
              <span className='font-technical text-xs text-[#914110] block mb-12 tracking-[0.3em]'>
                TOOLS & PLATFORMS
              </span>
              <StaggeredSection className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                {[
                  { name: 'Supabase', level: 'Advanced', icon: SiSupabase },
                  { name: 'Git', level: 'Expert', icon: FaGitAlt },
                  { name: 'Linux', level: 'Advanced', icon: FaLinux },
                  { name: 'Figma', level: 'Advanced', icon: FaFigma },
                ].map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className='group relative bg-neutral-900 border border-neutral-800 p-8 md:p-10 hover:border-[#914110] transition-all duration-500 cursor-default'
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <motion.div
                        className='text-5xl md:text-6xl text-white mb-6 group-hover:text-[#914110] transition-colors duration-500'
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <h3 className='font-serif text-2xl text-white mb-3'>
                        {tech.name}
                      </h3>
                      <p className='font-technical text-xs text-[#914110] tracking-widest'>
                        {tech.level}
                      </p>
                      <motion.div
                        className='absolute bottom-0 left-0 w-full h-1 bg-[#914110] origin-left'
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  );
                })}
              </StaggeredSection>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Projects Section */}
        <FeaturedProjectsSection />

        {/* Experience Section */}
        <section
          className='py-40 md:py-60 px-6 md:px-12 bg-neutral-950'
          id='experience'
        >
          <div className='max-w-5xl mx-auto'>
            <AnimatedSection className='mb-24 md:mb-32'>
              <h2 className='text-center text-5xl md:text-6xl font-serif text-white'>
                Professional Experience
              </h2>
            </AnimatedSection>
            <div className='space-y-0'>
              {/* RPL Catalyst */}
              <AnimatedSection
                className='flex flex-col md:flex-row justify-between py-12 md:py-16 border-t border-[#914110] group hover:bg-neutral-900 transition-colors duration-500 px-6 md:px-8'
                variant={fadeInLeft}
                delay={0}
              >
                <motion.span
                  className='font-technical text-xs text-[#914110] mb-4 md:mb-0'
                  variants={fadeInRight}
                >
                  DEC 2025 — JAN 2026
                </motion.span>
                <div className='md:w-1/2'>
                  <h4 className='font-serif text-2xl md:text-3xl text-white mb-2'>
                    Developer
                  </h4>
                  <p className='font-technical text-xs text-[#CCCCCC] mb-4 md:mb-6 tracking-[0.2em]'>
                    RPL CATALYST — AUSTRALIA
                  </p>
                  <p className='font-sans text-base text-[#CCCCCC] leading-relaxed'>
                    Served as a developer for this Australia-based organization,
                    further solidifying experience in the Australian
                    professional landscape and cross-cultural collaboration.
                  </p>
                </div>
              </AnimatedSection>

              {/* Boundless Barriers */}
              <AnimatedSection
                className='flex flex-col md:flex-row justify-between py-12 md:py-16 border-y border-[#914110] group hover:bg-neutral-900 transition-colors duration-500 px-6 md:px-8'
                variant={fadeInRight}
                delay={0.1}
              >
                <motion.span
                  className='font-technical text-xs text-[#914110] mb-4 md:mb-0'
                  variants={fadeInLeft}
                >
                  AUG 2025 — DEC 2025
                </motion.span>
                <div className='md:w-1/2'>
                  <h4 className='font-serif text-2xl md:text-3xl text-white mb-2'>
                    Web Developer
                  </h4>
                  <p className='font-technical text-xs text-[#CCCCCC] mb-4 md:mb-6 tracking-[0.2em]'>
                    BOUNDLESS BARRIERS — DISABILITY CARE
                  </p>
                  <p className='font-sans text-base text-[#CCCCCC] leading-relaxed'>
                    Contributed technical skills to support digital
                    infrastructure for this Australian disability care company,
                    enhancing their online presence and operational efficiency.
                  </p>
                </div>
              </AnimatedSection>

              {/* Top Catalyst */}
              <AnimatedSection
                className='flex flex-col md:flex-row justify-between py-12 md:py-16 border-y border-[#914110] group hover:bg-neutral-900 transition-colors duration-500 px-6 md:px-8'
                variant={fadeInLeft}
                delay={0.15}
              >
                <motion.span
                  className='font-technical text-xs text-[#914110] mb-4 md:mb-0'
                  variants={fadeInRight}
                >
                  JAN 2025 — MAR 2025
                </motion.span>
                <div className='md:w-1/2'>
                  <h4 className='font-serif text-2xl md:text-3xl text-white mb-2'>
                    Freelance Web Developer
                  </h4>
                  <p className='font-technical text-xs text-[#CCCCCC] mb-4 md:mb-6 tracking-[0.2em]'>
                    TOP CATALYST CONSULTING
                  </p>
                  <p className='font-sans text-base text-[#CCCCCC] leading-relaxed'>
                    Designed and developed a sleek, functional website for a
                    study abroad and immigration consultancy, showcasing ability
                    to deliver tailored solutions for professional service
                    businesses.
                  </p>
                </div>
              </AnimatedSection>

              {/* Edricenti */}
              <AnimatedSection
                className='flex flex-col md:flex-row justify-between py-12 md:py-16 border-y border-[#914110] group hover:bg-neutral-900 transition-colors duration-500 px-6 md:px-8'
                variant={fadeInRight}
                delay={0.2}
              >
                <motion.span
                  className='font-technical text-xs text-[#914110] mb-4 md:mb-0'
                  variants={fadeInLeft}
                >
                  2023 — 2024
                </motion.span>
                <div className='md:w-1/2'>
                  <h4 className='font-serif text-2xl md:text-3xl text-white mb-2'>
                    Founder
                  </h4>
                  <p className='font-technical text-xs text-[#CCCCCC] mb-4 md:mb-6 tracking-[0.2em]'>
                    EDRICENTI — BANGLADESH
                  </p>
                  <p className='font-sans text-base text-[#CCCCCC] leading-relaxed'>
                    Founded an all-in-one business solution startup. Though the
                    venture was a &apos;failed startup,&apos; it provided deep
                    insights into business operations, niche selection, and
                    resilience.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Teacup Feature Section */}
        <section className='py-40 md:py-60 px-6 md:px-12 bg-black overflow-hidden relative'>
          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-serif text-[#914110]/5 select-none pointer-events-none'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            &ldquo;
          </motion.div>
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <AnimatedSection variant={scaleUp}>
              <blockquote className='text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 md:mb-12'>
                Lowering the barrier to entry for businesses needing a digital
                presence.
              </blockquote>
            </AnimatedSection>
            <AnimatedSection variant={fadeInUp} delay={0.15}>
              <p className='font-sans text-lg text-[#CCCCCC] leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto'>
                Teacup provides websites for free, charging only a nominal
                $30/month for access to a specialized management dashboard —
                combining technical expertise with entrepreneurial vision.
              </p>
            </AnimatedSection>
            <AnimatedSection variant={fadeInUp} delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  className='inline-block px-12 py-5 bg-[#914110] text-white font-bold font-technical text-xs tracking-[0.4em] hover:bg-white transition-all duration-500'
                  href='https://teacup.website'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LAUNCH PROJECT
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Interests / Hobbies Section */}
        <section
          className='py-40 md:py-60 px-6 md:px-12 bg-neutral-950'
          id='interests'
        >
          <div className='max-w-7xl mx-auto'>
            {/* Header */}
            <AnimatedSection className='flex justify-between items-end mb-24 md:mb-32 border-b border-[#914110] pb-12'>
              <h2 className='text-6xl md:text-8xl font-serif text-white'>
                Creative Pursuits
              </h2>
              <motion.span
                className='font-technical text-sm text-[#914110]'
                variants={fadeInRight}
              >
                BEYOND CODE
              </motion.span>
            </AnimatedSection>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 items-start'>
              {/* Left Column - Description & Music */}
              <div>
                <AnimatedSection variant={fadeInLeft}>
                  <p className='font-sans text-xl text-[#CCCCCC] leading-relaxed mb-12 md:mb-16 max-w-lg'>
                    A polymath with a deep appreciation for the intersection of
                    logic and creativity. Exploring multiple artistic mediums
                    alongside technical development.
                  </p>
                </AnimatedSection>

                {/* Music Player */}
                <AnimatedSection
                  className='mb-12 md:mb-16'
                  variant={fadeInLeft}
                  delay={0.1}
                >
                  <MusicVisualizer />
                </AnimatedSection>
              </div>

              {/* Right Column - Image */}
              <AnimatedSection variant={fadeInRight}>
                <div className='relative'>
                  <div className='aspect-[4/5] bg-neutral-900 overflow-hidden'>
                    <img
                      alt='Abstract Art'
                      className='w-full h-full object-cover grayscale opacity-60 contrast-125'
                      src='/TJ.png'
                    />
                  </div>
                  <motion.div
                    className='absolute -bottom-12 md:-bottom-16 -left-8 md:-left-16 bg-black border border-[#914110] p-10 md:p-16 max-w-sm hidden lg:block'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <span className='font-technical text-xs text-[#914110] block mb-4 md:mb-6'>
                      BEYOND CODE
                    </span>
                    <h3 className='font-serif text-3xl md:text-4xl text-white mb-4 md:mb-6'>
                      Artistic Depth
                    </h3>
                    <p className='font-sans text-sm text-[#CCCCCC] leading-relaxed'>
                      Combining visual creativity with lyrical expression. Work
                      spans multiple creative mediums, showcasing versatility
                      and artistic depth.
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-40 md:py-60 px-6 md:px-12 bg-black' id='contact'>
          <div className='max-w-4xl mx-auto'>
            <AnimatedSection className='text-center mb-24 md:mb-32'>
              <h2 className='text-6xl md:text-8xl font-serif text-white mb-6'>
                Get In Touch
              </h2>
              <motion.p
                className='font-technical text-xs text-[#914110] tracking-[0.4em]'
                variants={opacityOnly}
              >
                AVAILABLE FOR COLLABORATION
              </motion.p>
            </AnimatedSection>
            <div className='space-y-16 md:space-y-24'>
              <AnimatedSection variant={fadeInUp}>
                <div className='text-center'>
                  <p className='font-sans text-xl text-[#CCCCCC] leading-relaxed mb-12 max-w-2xl mx-auto'>
                    For inquiries regarding the Teacup project or professional
                    collaboration, reach out directly.
                  </p>
                </div>
              </AnimatedSection>
              <StaggeredSection className='flex flex-col md:flex-row justify-center gap-12 md:gap-24'>
                <motion.a
                  className='flex items-center gap-4 group'
                  href='mailto:tahmid@teacup.website'
                  variants={fadeInLeft}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className='material-symbols-outlined text-[#914110] text-3xl'
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    mail
                  </motion.span>
                  <div>
                    <p className='font-technical text-xs text-[#914110] block mb-1'>
                      EMAIL
                    </p>
                    <p className='font-sans text-lg text-white'>
                      tahmid@teacup.website
                    </p>
                  </div>
                </motion.a>
                <motion.a
                  className='flex items-center gap-4 group'
                  href='https://teacup.website'
                  target='_blank'
                  rel='noopener noreferrer'
                  variants={fadeInRight}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className='material-symbols-outlined text-[#914110] text-3xl'
                    whileHover={{ scale: 1.2, rotate: -15 }}
                  >
                    language
                  </motion.span>
                  <div>
                    <p className='font-technical text-xs text-[#914110] block mb-1'>
                      WEBSITE
                    </p>
                    <p className='font-sans text-lg text-white'>
                      teacup.website
                    </p>
                  </div>
                </motion.a>
              </StaggeredSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center bg-[#050505] border-t border-[#914110]/20'>
        <motion.div
          className='text-5xl md:text-6xl font-serif text-[#914110] mb-10 md:mb-12 tracking-tighter'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          TJ
        </motion.div>
        <StaggeredSection className='flex flex-wrap justify-center gap-8 md:gap-12 mb-12 md:mb-16'>
          <motion.a
            className='font-technical text-xs tracking-[0.3em] text-[#CCCCCC] hover:text-white transition-all duration-300'
            href='https://github.com/tahmidjihan'
            target='_blank'
            rel='noopener noreferrer'
            variants={fadeInUp}
            whileHover={{ y: -4 }}
          >
            GITHUB
          </motion.a>
          <motion.a
            className='font-technical text-xs tracking-[0.3em] text-[#CCCCCC] hover:text-white transition-all duration-300'
            href='https://facebook.com/tahmidjihan'
            target='_blank'
            rel='noopener noreferrer'
            variants={fadeInUp}
            whileHover={{ y: -4 }}
          >
            FACEBOOK
          </motion.a>
          <motion.a
            className='font-technical text-xs tracking-[0.3em] text-[#CCCCCC] hover:text-white transition-all duration-300'
            href='https://twitter.com/tahmidjihan'
            target='_blank'
            rel='noopener noreferrer'
            variants={fadeInUp}
            whileHover={{ y: -4 }}
          >
            TWITTER
          </motion.a>
          <motion.a
            className='font-technical text-xs tracking-[0.3em] text-[#CCCCCC] hover:text-white transition-all duration-300'
            href='https://teacup.website'
            target='_blank'
            rel='noopener noreferrer'
            variants={fadeInUp}
            whileHover={{ y: -4 }}
          >
            TEACUP
          </motion.a>
        </StaggeredSection>
        <motion.div
          className='font-technical text-xs tracking-[0.2em] text-[#914110] opacity-70'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Tahmid Jihan. All rights reserved.
        </motion.div>
      </footer>
    </div>
  );
}
