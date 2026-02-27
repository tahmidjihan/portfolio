export default function AboutSection() {
  return (
    <section className="py-32 bg-zinc-900/30" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition duration-500"></div>
            <div className="relative aspect-[4/5] bg-zinc-800 rounded-2xl overflow-hidden border border-white/10">
              <img 
                alt="Portrait of Tahmid Jihan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
                src="./tahmid.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-sm font-medium tracking-widest uppercase">Developer</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold font-display mb-8 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Hello! I'm Tahmid, a developer who thrives at the intersection of design and functionality. My journey in tech started with a curiosity about how the web works, which evolved into a career dedicated to creating impactful digital products.
              </p>
              <p>
                I specialize in building responsive, accessible, and performant web applications. When I'm not coding, you'll find me exploring new technologies, experimenting with creative coding, or solving complex architectural problems.
              </p>
              <p>
                My approach is simple: understand the problem deeply, design with the user in mind, and write code that is as beautiful as the interface it powers.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white mb-1">Modern Stack</h4>
                <p className="text-sm text-slate-500">React, Next.js, Node.js</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white mb-1">Creative UI</h4>
                <p className="text-sm text-slate-500">Tailwind, Framer, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
