import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-20 md:py-36 text-neutral-200 bg-[#04081A] font-sans antialiased relative overflow-hidden">
        {/* Subtle Ambient Light Effect */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-6xl px-6 space-y-12 md:space-y-20 relative z-10">
          
          {/* Section Header */}
          <div className="border-b border-neutral-800/60 pb-6">
            <span className="text-xs font-mono tracking-[0.2em] text-blue-400 uppercase block mb-2">
              // CORE SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-white">
              Suryakant
            </h2>
          </div>

          {/* Main Grid Layout */}
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Image Section - Expert Level Engineering Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="relative group w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/80 p-2 shadow-2xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-blue-500/5">
                <div className="overflow-hidden rounded-xl aspect-[4/5] sm:aspect-[76/59] lg:aspect-[4/5] relative w-full h-full">
                  <img
                    src={HeroImg}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    alt="Suryakant Portfolio Capture"
                    width={1207}
                    height={929}
                    loading="lazy"
                  />
                  {/* Premium overlay pulse */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04081A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Right Expert Copy & Tech Matrix */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed font-normal">
                <p>
                  Hello! I'm Suryakant, a <strong className="font-semibold text-white tracking-tight">Full-Stack Developer & Machine Learning Engineer</strong> focused on building intelligent, scalable systems and performant web applications.
                </p>
                
                <p>
                  I specialize in architecting complete full-stack solutions and engineering data pipelines. My core stack spans <strong className="font-semibold text-white tracking-tight">React, Next.js, Tailwind CSS, Node.js, Express, and Python</strong>, allowing me to build robust backends and seamlessly integrate advanced AI/ML capabilities.
                </p>
                
                <p>
                  Driven by data scale and real-world impact, I specialize in processing large-scale datasets, deploying predictive models, and crafting intuitive, user-first interfaces that perform flawlessly under heavy workloads.
                </p>
              </div>

              {/* Advanced Technical Matrix Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-neutral-900/60 to-neutral-900/20 border border-neutral-800/80 rounded-xl hover:border-neutral-700/60 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">// Stack Architecture</span>
                  </div>
                  <span className="text-sm text-neutral-200 font-medium tracking-wide">
                    React, Next.js, Node.js, Express
                  </span>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-neutral-900/60 to-neutral-900/20 border border-neutral-800/80 rounded-xl hover:border-neutral-700/60 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">// Core Engines</span>
                  </div>
                  <span className="text-sm text-neutral-200 font-medium tracking-wide">
                    Python, Machine Learning, Data Science
                  </span>
                </div>
              </div>

              {/* Professional Terminal Metric Quote */}
              <div className="pt-4">
                <blockquote className="border-l-2 border-neutral-700 pl-4 py-1 font-mono text-xs md:text-sm text-neutral-400 italic leading-relaxed">
                  "Driven by data scale, structural clarity, and real-world impact. Currently engineering solutions that process millions of data matrix points seamlessly."
                  <div className="mt-3 not-italic">
                    <cite className="block font-sans font-medium text-white text-[11px] uppercase tracking-widest">
                      Suryakant — Full-Stack & ML Engineer
                    </cite>
                  </div>
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}