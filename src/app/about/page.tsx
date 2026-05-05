import Link from "next/link";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "REST API", "GraphQL", "WebSockets"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM", "MySQL"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"] },
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Ltd.",
    period: "2023 – Present",
    description:
      "Leading the frontend team to build scalable SaaS products. Improved performance by 40% through code splitting and lazy loading. Mentoring junior developers and conducting code reviews.",
    achievements: ["40% performance improvement", "Led team of 5 developers", "Shipped 3 major product features"],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 – 2023",
    description:
      "Built and maintained multiple client-facing applications using React and Node.js. Integrated third-party APIs and payment gateways. Reduced API response time by 60% through caching strategies.",
    achievements: ["60% faster API responses", "Integrated Stripe & PayPal", "Built real-time chat feature"],
  },
  {
    role: "Junior Developer",
    company: "WebAgency",
    period: "2019 – 2021",
    description:
      "Developed responsive websites and landing pages for various clients. Collaborated closely with designers to implement pixel-perfect UIs. Maintained and updated legacy codebases.",
    achievements: ["20+ client websites delivered", "Learned React & Node.js", "Improved legacy codebase"],
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "BUET (Bangladesh University of Engineering & Technology)",
    period: "2015 – 2019",
    description: "Graduated with honors. Focused on algorithms, data structures, and software engineering.",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Udemy / freeCodeCamp",
    period: "2019",
    description: "Completed intensive training in modern web technologies including React, Node.js, and databases.",
  },
];

const funFacts = [
  { icon: "☕", text: "Coffee cups per day: 3-4" },
  { icon: "🌍", text: "Countries visited: 8" },
  { icon: "📚", text: "Tech books read: 30+" },
  { icon: "🎮", text: "Favorite game: Chess" },
  { icon: "🎵", text: "Codes best with: Lo-fi music" },
  { icon: "🌙", text: "Peak productivity: Late night" },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="shrink-0">
          <div className="w-44 h-44 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-7xl shadow-2xl shadow-violet-500/30 ring-4 ring-violet-500/20">
            👨‍💻
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Available for work</span>
          </div>
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            I&apos;m <span className="text-violet-400 font-semibold">Mahmood Hassan</span>, a passionate
            full-stack developer with 5+ years of experience building modern web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Based in Dhaka, Bangladesh 🇧🇩. I specialize in building end-to-end web applications —
            from crafting pixel-perfect frontends to designing robust backend architectures.
            I&apos;m deeply passionate about open-source, developer tooling, and creating products
            that make a real difference in people&apos;s lives.
          </p>
          <p className="text-gray-500 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
            open-source projects, or enjoying a good cup of coffee ☕. I believe in writing clean,
            maintainable code and creating exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-medium transition-colors border border-gray-700"
            >
              Twitter
            </a>
            <a
              href="/resume.pdf"
              className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            <span className="text-violet-400">#</span> Skills &amp; Technologies
          </h2>
          <p className="text-gray-500 text-sm">Tools and technologies I work with regularly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
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
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            <span className="text-violet-400">#</span> Work Experience
          </h2>
          <p className="text-gray-500 text-sm">My professional journey so far.</p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-6 border-l-2 border-gray-800 hover:border-violet-500 transition-colors group"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-700 group-hover:border-violet-500 transition-colors" />
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 group-hover:border-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <span className="text-violet-400 text-sm font-medium shrink-0">{exp.period}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((a) => (
                    <span key={a} className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs">
                      ✓ {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            <span className="text-violet-400">#</span> Education
          </h2>
          <p className="text-gray-500 text-sm">My academic background and certifications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
              <p className="text-violet-400 text-sm font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-600 text-xs mb-3">{edu.period}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            <span className="text-violet-400">#</span> Fun Facts
          </h2>
          <p className="text-gray-500 text-sm">A little bit about me outside of work.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {funFacts.map((fact) => (
            <div
              key={fact.text}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-3 hover:border-gray-700 transition-colors"
            >
              <span className="text-2xl">{fact.icon}</span>
              <p className="text-gray-400 text-sm">{fact.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 bg-gray-900/50 border border-gray-800 rounded-3xl px-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Interested in working together?</h2>
        <p className="text-gray-500">I&apos;m always open to discussing new projects and opportunities.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-white font-semibold transition-all hover:-translate-y-0.5"
          >
            See My Work
          </Link>
        </div>
      </section>
    </div>
  );
}
