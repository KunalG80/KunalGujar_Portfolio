import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          Full Stack Engineer <br /> & Data Scientist
        </h1>

        <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
          I design scalable microservices systems and build intelligent
          machine learning pipelines that transform raw data into insight.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
