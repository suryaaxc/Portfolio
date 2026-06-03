import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-neutral-50 bg-[#04081A] font-sans">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          
          {/* Top Heading Section */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">/ Systems Architect & Intelligence</span>
            <h2 className="relative z-10 max-w-xl text-4xl font-black lg:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
              Suryakant
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-center">
            
            {/* Left Image Section - Original Colors with clean border */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl p-px from-neutral-800 via-neutral-700 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block object-cover w-full h-full border border-neutral-800"
                  alt="Suryakant"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* Right Professional AI Description Section */}
            <div className="relative space-y-5 text-neutral-300 text-sm md:text-base leading-relaxed">
              <p>
                Hello! I'm Suryakant, a <strong className="font-bold text-white">Full-Stack Developer & Machine Learning Engineer</strong> focused on building intelligent, scalable systems and performant web applications.
              </p>
              
              <p>
                I specialize in architecting complete full-stack solutions and engineering data pipelines. My core stack spans <strong className="font-bold text-white">React, Next.js, Tailwind CSS, Node.js, Express, and Python</strong>, allowing me to build robust backends and seamlessly integrate advanced AI/ML capabilities.
              </p>
              
              <p>
                Driven by data scale and real-world impact, I specialize in processing large-scale datasets, deploying predictive models, and crafting intuitive, user-first interfaces that perform flawlessly under heavy workloads.
              </p>

              {/* Modern Grid Badges for Core Stack Overview */}
              <div className="pt-4 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-neutral-900/40 border border-neutral-800 rounded-lg">
                  <span className="block text-neutral-500 mb-1">// Stack Architecture</span>
                  <span className="text-neutral-200 font-medium">React, Next.js, Node.js, Express</span>
                </div>
                <div className="p-3 bg-neutral-900/40 border border-neutral-800 rounded-lg">
                  <span className="block text-neutral-500 mb-1">// Core Engines</span>
                  <span className="text-neutral-200 font-medium">Python, Machine Learning, Data Science</span>
                </div>
              </div>

              {/* Re-designed Blockquote */}
              <div className="pt-6">
                <blockquote className="border-l-2 border-neutral-700 pl-4 font-mono text-xs text-neutral-400 italic">
                  <p>
                    "Driven by data scale, structural clarity, and real-world impact. Currently engineering solutions that process millions of data matrix points seamlessly."
                  </p>
                  <div className="mt-4">
                    <cite className="block font-medium text-neutral-200 not-italic uppercase tracking-wider text-[10px]">
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