export default function BeyondTheCodeSection() {
  return (
    <section className="py-32 border-t border-white/5" id="beyond-the-code">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Beyond The Code</h2>
          <p className="text-slate-400">My creative pursuits and passions outside of programming</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Music Production */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">music_note</span>
              </div>
              <h3 className="text-2xl font-bold font-display">Music Production</h3>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              I produce electronic music focusing on ambient and experimental soundscapes. My work explores the intersection of technology and artistry, using digital tools to create immersive audio experiences. I've released several tracks on independent platforms and collaborate with other artists to push the boundaries of electronic music.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Ableton Live</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Sound Design</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Synthesis</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Mixing</span>
            </div>
          </div>
          
          {/* Creative Writing */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">edit</span>
              </div>
              <h3 className="text-2xl font-bold font-display">Creative Writing</h3>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              I write short stories and technical articles exploring the human side of technology. My work has been featured in various online publications, where I discuss topics ranging from AI ethics to the philosophy of programming. I believe in the power of storytelling to make complex technical concepts accessible and engaging.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Technical Writing</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Fiction</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Blogging</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Documentation</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 italic">
            "Creativity is not just about code—it's about expressing ideas through different mediums and finding beauty in unexpected places."
          </p>
        </div>
      </div>
    </section>
  );
}
