'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ExperienceSection() {
  const headerAnim = useScrollAnimation({ threshold: 0.2 })
  const card0Anim = useScrollAnimation({ threshold: 0.15 })
  const card1Anim = useScrollAnimation({ threshold: 0.15 })
  const card2Anim = useScrollAnimation({ threshold: 0.15 })
  const card3Anim = useScrollAnimation({ threshold: 0.15 })

  const experiences = [
    {
      title: "Edricenti",
      company: "Founder",
      period: "2023–2024",
      location: "Bangladesh",
      icon: "rocket_launch",
      iconBg: "bg-slate-200 dark:bg-white/10",
      iconColor: "text-slate-600 dark:text-slate-300",
      description: "Founded an all-in-one business solution startup. Though the venture was a 'failed startup,' it provided deep insights into business operations, niche selection, and resilience."
    },
    {
      title: "Top Catalyst Consulting",
      company: "Freelance Web Developer",
      period: "Jan 2025 – March 2025",
      location: "Remote",
      icon: "code",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: "Designed and developed a sleek, functional website for a study abroad and immigration consultancy, showcasing ability to deliver tailored solutions for professional service businesses."
    },
    {
      title: "Boundless Barriers",
      company: "Australian Disability Care Company",
      period: "Aug 2025 – Dec 2025",
      location: "remote",
      icon: "business",
      iconBg: "bg-slate-200 dark:bg-white/10",
      iconColor: "text-slate-600 dark:text-slate-300",
      description: "Contributed technical skills to support digital infrastructure for this Australian disability care company, enhancing their online presence and operational efficiency."
    },
    {
      title: "RPL Catalyst",
      company: "Australia-based Organization",
      period: "Dec 2025 – Jan 2026",
      location: "remote",
      icon: "school",
      iconBg: "bg-slate-200 dark:bg-white/10",
      iconColor: "text-slate-600 dark:text-slate-300",
      description: "Served as a developer for this Australia-based organization, further solidifying experience in the Australian professional landscape and cross-cultural collaboration."
    }
  ];

  const cardAnims = [card0Anim, card1Anim, card2Anim, card3Anim]

  return (
    <section className="py-32 bg-zinc-900/10 border-t border-white/5" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={headerAnim.ref}
          className={`text-center mb-20 animate-on-scroll ${headerAnim.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl font-bold font-display mb-4">Professional Experience</h2>
          <p className="text-slate-400">Career progression through various international roles</p>
        </div>
        
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={cardAnims[index].ref}
              className={`glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors animate-on-scroll stagger-${index + 1} ${cardAnims[index].isVisible ? 'is-visible' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start space-x-6">
                  <div className={`w-14 h-14 shrink-0 ${exp.iconBg} rounded-xl flex items-center justify-center ${exp.iconColor}`}>
                    <span className="material-symbols-outlined">{exp.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-slate-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-white/10 text-xs font-bold tracking-wider uppercase mb-2">
                    {exp.period}
                  </span>
                  <p className="text-sm text-slate-400">{exp.location}</p>
                </div>
              </div>
              <div className="mt-6 ml-0 md:ml-20">
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
