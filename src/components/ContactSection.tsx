export default function ContactSection() {
  return (
    <section className='py-32 bg-zinc-900/30' id='contact'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold font-display'>Let's Connect</h3>
              <p className='text-slate-400 leading-relaxed'>
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className='space-y-4'>
                <a
                  href='mailto:tahmid@teacup.website'
                  className='flex items-center space-x-3 text-white hover:text-primary transition-colors'
                >
                  <span className='material-symbols-outlined'>mail</span>
                  <span>tahmid@teacup.website</span>
                </a>

                <a
                  href='#'
                  className='flex items-center space-x-3 text-white hover:text-primary transition-colors'
                >
                  <span className='material-symbols-outlined'>location_on</span>
                  <span>Ctg, BD</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
