import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Movie Matcher Flex — AI Movie Recommendation System",
    description:
      "Architected a content-based recommendation engine utilizing TF-IDF Vectorization and Cosine Similarity metrics to process a data matrix of 32M+ records with sub-second real-time inference. Engineered high-performance data preprocessing pipelines with Pandas and NumPy.",
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop", // Cinema/Matrix Theme Thumbnail
    color: "#60A5FA", 
    githubLink: "https://github.com/suryaaxc/Movie-Matcher-Flex",
    liveLink: "https://movie-matcher-flex.streamlit.app/",
  },
  {
    title: "PolyGlot.AI — Advanced AI Translation Platform",
    description:
      "Engineered an intelligent Language Translation tool featuring low-latency processing and dynamic text tokenization. Integrated full-stack API orchestration with seamless state management to bridge complex translation queries in real-time.",
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop", // Language/Neural-Network Theme Thumbnail
    color: "#2DD4BF", 
    githubLink: "https://github.com/suryaaxc/",
    liveLink: "https://polyglot-ai-suryaxc.streamlit.app/",
  },
  {
    title: "NebulaX Collective — Multi-Spectrum Space Exploration Hub",
    description:
      "Collaborated on a multi-spectrum astronomy platform utilizing NASA API datasets to stream celestial imagery and planetary telemetry. Integrated Three.js / WebGL pipelines for interactive 3D solar rendering with robust Node.js data ingestion layers.",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop", // Deep Space/Nebula Theme Thumbnail
    color: "#C084FC", 
    githubLink: "https://github.com/suryaaxc/NebulaX-Collective",
    liveLink: "https://nebulax-nikhil.vercel.app/",
  },
  {
    title: "Premium AI-Driven Developer Command Portfolio",
    description:
      "Architected a highly responsive developer ecosystem using React and Vite with fluid micro-animations. Integrated interactive technical clouds, live system terminal code blocks, and adaptive grid metrics with fully optimized Vercel edge deployment hooks.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop", // Clean Code/IDE Theme Thumbnail
    color: "#F59E0B", 
    githubLink: "https://github.com/suryaaxc/portfolio",
    liveLink: "https://github.com/suryaaxc",
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-[#04081A]">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.22, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[15%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div 
          className="w-full flex flex-col md:flex-row bg-zinc-900/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border"
          style={{ borderColor: `${color}20` }}
        >
          {/* Image section */}
          <div className="w-full md:w-[55%] h-[230px] md:h-[380px] lg:h-[420px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/70 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-mono tracking-wider">
              CORE_SYSTEM_0{i + 1}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col justify-between bg-zinc-950/40">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-2 rounded-full shadow-lg"
                  style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                />
                <div className="h-[1px] w-16 bg-zinc-700" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                {title}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-md font-sans">
                {description}
              </p>
            </div>

            <div className="mt-6 pt-4">
              <div className="w-full h-[1px] bg-zinc-800/80 mb-4" />

              <div className="flex items-center gap-6">
                {/* Repository Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs font-mono tracking-wide">Repository</span>
                </motion.a>

                {/* Live Production Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs font-mono tracking-wide">Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};