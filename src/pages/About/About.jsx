import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="developer illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Suryakant, a passionate Frontend Developer with a strong focus on creating responsive, user-friendly, and visually appealing web applications.
              </p>
              <p className="text-white">
                I specialize in modern web technologies such as <span className="font-bold">React, Next.js, Tailwind CSS, JavaScript , HTML , CSS and more</span>. My goal is to build performant and accessible user experiences that not only look great but also work seamlessly across all devices.
              </p>
              <p className="text-white">
                 Soon, I'll start my journey into backend technologies like Node.js and Express, aiming to grow into a full-stack developer and build more complete, robust web applications.
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, always exploring new tools, frameworks, and best practices in the world of web development. I’m driven by curiosity and the desire to continuously improve and deliver meaningful solutions through code.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Suryakant — Frontend Developer
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
