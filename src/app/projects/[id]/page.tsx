'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from '@/animations/variants';
import Spinner from '@/components/Spinner';
import featuredWorks from '@/data/featuredWorks.json';
import { useState } from 'react';

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
  return (
    <motion.div
      className={className}
      initial='hidden'
      animate='visible'
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
  return (
    <motion.div
      className={className}
      initial='hidden'
      animate='visible'
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  const project = featuredWorks.find((p) => p.id === projectId);
  const [isLoading, setIsLoading] = useState(false);

  if (!project) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center px-6'>
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className='text-4xl md:text-6xl font-serif text-white mb-6'>
            Project Not Found
          </h1>
          <p className='font-sans text-lg text-[#CCCCCC] mb-8'>
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href='/' passHref>
            <motion.button
              className='inline-block px-12 py-5 bg-[#914110] text-white font-bold font-technical text-xs tracking-[0.4em] hover:bg-white transition-all duration-500'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GO HOME
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    router.push(path);
  };

  return (
    <div className='min-h-screen bg-black'>
      {isLoading && (
        <motion.div
          className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='flex flex-col items-center gap-6'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className='relative'>
              <div className='absolute inset-0 blur-xl bg-[#914110]/30 rounded-full animate-pulse' />
              <Spinner size='lg' className='text-[#914110] relative z-10' />
            </div>
            <p className='font-technical text-xs tracking-[0.3em] text-[#CCCCCC]'>
              LOADING...
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* Navigation */}
      <motion.nav
        className='fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/90'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className='max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20'>
          <div className='flex items-center justify-between h-full'>
            <Link href='/' passHref>
              <motion.button
                className='text-2xl font-serif tracking-tighter text-white hover:text-[#914110] transition-colors'
                whileHover={{ scale: 1.05 }}
              >
                <span className='text-[#914110]'>T</span>J
              </motion.button>
            </Link>
            <Link href='/' passHref>
              <motion.button
                className='font-technical text-xs tracking-[0.3em] text-[#CCCCCC] hover:text-white transition-all duration-300'
                whileHover={{ x: -4 }}
              >
                ← BACK
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-6 md:px-12'>
        <div className='max-w-7xl mx-auto'>
          <AnimatedSection variant={fadeInUp}>
            <motion.div
              className='relative overflow-hidden mb-12 aspect-[16/9] bg-neutral-900'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                alt={project.title}
                className='w-full h-full object-cover'
                src={project.image}
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection variant={fadeInUp} delay={0.1}>
            <div className='mb-8'>
              <span className='font-technical text-xs text-[#914110] tracking-[0.3em] block mb-4'>
                {project.category}
              </span>
              <h1 className='text-5xl md:text-7xl font-serif text-white mb-6'>
                {project.title}
              </h1>
              <span className='font-technical text-sm text-[#CCCCCC] tracking-widest'>
                {project.techStack}
              </span>
            </div>
          </AnimatedSection>

          {/* Action Buttons */}
          <AnimatedSection variant={fadeInUp} delay={0.2}>
            <div className='flex flex-wrap gap-4 mb-16'>
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block px-10 py-4 bg-[#914110] text-white font-bold font-technical text-xs tracking-[0.3em] hover:bg-white transition-all duration-500'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW LIVE PROJECT →
                </motion.a>
              )}
              {project.repoLink && (
                <motion.a
                  href={project.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block px-10 py-4 border-2 border-[#914110] text-white font-bold font-technical text-xs tracking-[0.3em] hover:bg-[#914110] transition-all duration-500'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW ON GITHUB
                </motion.a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900'>
        <div className='max-w-7xl mx-auto'>
          {/* Technology Stack */}
          <AnimatedSection className='mb-24 md:mb-32' variant={fadeInUp}>
            <h2 className='text-4xl md:text-5xl font-serif text-white mb-12'>
              Technology Stack
            </h2>
            <StaggeredSection className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
              {project.mainTechStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  className='bg-neutral-900 border border-neutral-800 p-6 text-center hover:border-[#914110] transition-all duration-300'
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p className='font-serif text-xl text-white'>{tech}</p>
                </motion.div>
              ))}
            </StaggeredSection>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection className='mb-24 md:mb-32' variant={fadeInRight}>
            <h2 className='text-4xl md:text-5xl font-serif text-white mb-8'>
              About This Project
            </h2>
            <p className='font-sans text-xl text-[#CCCCCC] leading-relaxed max-w-4xl'>
              {project.description}
            </p>
          </AnimatedSection>

          {/* Challenges */}
          <AnimatedSection className='mb-24 md:mb-32' variant={fadeInLeft}>
            <h2 className='text-4xl md:text-5xl font-serif text-white mb-12'>
              Challenges Faced
            </h2>
            <StaggeredSection className='space-y-6'>
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className='bg-neutral-900 border-l-4 border-[#914110] p-8'
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: index * 0.1 }}
                >
                  <p className='font-sans text-lg text-[#CCCCCC] leading-relaxed'>
                    {challenge}
                  </p>
                </motion.div>
              ))}
            </StaggeredSection>
          </AnimatedSection>

          {/* Future Improvements */}
          <AnimatedSection variant={fadeInRight}>
            <h2 className='text-4xl md:text-5xl font-serif text-white mb-12'>
              Future Improvements
            </h2>
            <StaggeredSection className='space-y-6'>
              {project.improvements.map((improvement, index) => (
                <motion.div
                  key={index}
                  className='bg-neutral-900 border-l-4 border-[#914110]/50 p-8 hover:border-[#914110] transition-colors duration-300'
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: index * 0.1 }}
                >
                  <p className='font-sans text-lg text-[#CCCCCC] leading-relaxed'>
                    {improvement}
                  </p>
                </motion.div>
              ))}
            </StaggeredSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer CTA */}
      <section className='py-24 px-6 md:px-12 bg-black border-t border-[#914110]/20'>
        <div className='max-w-4xl mx-auto text-center'>
          <AnimatedSection variant={fadeInUp}>
            <h2 className='text-3xl md:text-4xl font-serif text-white mb-6'>
              Interested in Working Together?
            </h2>
            <p className='font-sans text-lg text-[#CCCCCC] mb-8'>
              Let&apos;s build something amazing for your business.
            </p>
            <motion.button
              onClick={() => handleNavigation('/')}
              className='inline-block px-12 py-5 bg-[#914110] text-white font-bold font-technical text-xs tracking-[0.4em] hover:bg-white transition-all duration-500'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
