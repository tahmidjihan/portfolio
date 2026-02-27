export default function ContactSection() {
  return (
    <section className="py-32 bg-zinc-900/30" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Get In Touch</h2>
          <p className="text-slate-400">Let's collaborate on your next project</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hello@tahmidjihan.com" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">mail</span>
                  <span>hello@tahmidjihan.com</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">phone</span>
                  <span>+1 (555) 123-4567</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">location_on</span>
                  <span>New York, NY</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary hover:bg-indigo-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
