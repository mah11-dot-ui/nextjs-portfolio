import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl text-center space-y-6">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium">
          👋 Welcome to my portfolio
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Alex Rahman
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          Full-Stack Developer &amp; UI/UX Enthusiast
        </p>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          I build beautiful, performant web applications with modern technologies.
          Passionate about clean code and great user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="pt-8 flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-gray-800 border border-gray-700 text-gray-400 text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
