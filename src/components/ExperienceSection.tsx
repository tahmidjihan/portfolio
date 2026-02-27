export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Creative Solutions Inc.",
      period: "2021 — Present",
      location: "New York, NY (Remote)",
      icon: "code",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: "Leading the frontend architecture for high-traffic SaaS applications. Specialized in building reusable component libraries and optimizing performance across complex dashboard interfaces."
    },
    {
      title: "Web Developer",
      company: "Digital Pulse Agency",
      period: "2019 — 2021",
      location: "Austin, TX",
      icon: "terminal",
      iconBg: "bg-slate-200 dark:bg-white/10",
      iconColor: "text-slate-600 dark:text-slate-300",
      description: "Developed and maintained responsive websites for a diverse range of clients from startups to Fortune 500 companies. Focused on pixel-perfect UI implementation and SEO best practices."
    },
    {
      title: "Junior UI Designer",
      company: "Freelance",
      period: "2017 — 2019",
      location: "Remote",
      icon: "design_services",
      iconBg: "bg-slate-200 dark:bg-white/10",
      iconColor: "text-slate-600 dark:text-slate-300",
      description: "Crafted visual identities and landing pages for local businesses and independent creators. Transitioned into development through a desire to bring static designs to life."
    }
  ];

  return (
    <section className="py-32 bg-zinc-900/10 border-t border-white/5" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Experience</h2>
          <p className="text-slate-400">My professional journey and key milestones.</p>
        </div>
        
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors">
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
