const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "REST API", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Ltd.",
    period: "2023 – Present",
    description:
      "Leading the frontend team to build scalable SaaS products. Improved performance by 40% through code splitting and lazy loading.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 – 2023",
    description:
      "Built and maintained multiple client-facing applications using React and Node.js. Integrated third-party APIs and payment gateways.",
  },
  {
    role: "Junior Developer",
    company: "WebAgency",
    period: "2019 – 2021",
    description:
      "Developed responsive websites and landing pages for various clients. Collaborated closely with designers to implement pixel-perfect UIs.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-6xl shadow-2xl shadow-violet-500/30">
            👨‍💻
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            I&apos;m <span className="text-violet-400 font-semibold">Mahmood Hassan</span>, a passionate
            full-stack developer with 5+ years of experience building modern web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-gray-500 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
            open-source projects, or enjoying a good cup of coffee ☕. I believe in writing clean,
            maintainable code and creating exceptional user experiences.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-medium transition-colors border border-gray-700"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-medium transition-colors border border-gray-700"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white">
          <span className="text-violet-400">#</span> Skills &amp; Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white">
          <span className="text-violet-400">#</span> Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-6 border-l-2 border-gray-800 hover:border-violet-500 transition-colors group"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-700 group-hover:border-violet-500 transition-colors" />
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 group-hover:border-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-white font-semibold">{exp.role}</h3>
                  <span className="text-violet-400 text-sm font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
