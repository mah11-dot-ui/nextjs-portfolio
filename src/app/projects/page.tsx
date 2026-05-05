const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, checkout, and payment integration using Stripe. Supports multi-vendor, inventory tracking, and order management.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    emoji: "🛒",
    color: "from-violet-500/20 to-indigo-500/20",
    stats: { stars: 128, forks: 34 },
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Kanban-style task manager with drag-and-drop, real-time updates, team collaboration, and deadline tracking. Includes notifications, file attachments, and activity logs.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    emoji: "📋",
    color: "from-emerald-500/20 to-teal-500/20",
    stats: { stars: 95, forks: 21 },
  },
  {
    id: 3,
    title: "AI Chat Application",
    description:
      "A ChatGPT-like application with streaming responses, conversation history, and multiple AI model support. Features markdown rendering, code highlighting, and export functionality.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL", "Vercel AI SDK"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    emoji: "🤖",
    color: "from-blue-500/20 to-cyan-500/20",
    stats: { stars: 210, forks: 67 },
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This very portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark theme, and multiple pages.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
    live: "/",
    featured: false,
    emoji: "🌐",
    color: "from-pink-500/20 to-rose-500/20",
    stats: { stars: 45, forks: 12 },
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with 7-day forecast, location search, and interactive charts. Uses geolocation API for automatic location detection.",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    emoji: "🌤️",
    color: "from-orange-500/20 to-amber-500/20",
    stats: { stars: 62, forks: 18 },
  },
  {
    id: 6,
    title: "Blog CMS",
    description:
      "A headless CMS for managing blog posts with markdown support, image uploads, and SEO optimization. Includes a rich text editor and tag management.",
    tags: ["Next.js", "Sanity.io", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    emoji: "✍️",
    color: "from-purple-500/20 to-violet-500/20",
    stats: { stars: 38, forks: 9 },
  },
  {
    id: 7,
    title: "Finance Tracker",
    description:
      "Personal finance management app with expense tracking, budget planning, and visual analytics. Supports CSV import/export and recurring transactions.",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    emoji: "💰",
    color: "from-green-500/20 to-emerald-500/20",
    stats: { stars: 74, forks: 22 },
  },
  {
    id: 8,
    title: "URL Shortener",
    description:
      "A fast URL shortener with custom aliases, click analytics, QR code generation, and link expiration. Built with Redis for high-performance redirects.",
    tags: ["Next.js", "Redis", "PostgreSQL", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    emoji: "🔗",
    color: "from-sky-500/20 to-blue-500/20",
    stats: { stars: 51, forks: 15 },
  },
  {
    id: 9,
    title: "Recipe Finder App",
    description:
      "Discover recipes based on ingredients you have. Features dietary filters, nutritional info, step-by-step cooking mode, and a favorites list.",
    tags: ["React", "Spoonacular API", "Tailwind CSS", "LocalStorage"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    emoji: "🍳",
    color: "from-red-500/20 to-orange-500/20",
    stats: { stars: 29, forks: 7 },
  },
];

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">
          <span className="text-violet-400">#</span> My Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          A collection of things I&apos;ve built — from side projects to production apps.
          All source code is available on GitHub.
        </p>
        <div className="flex gap-6 pt-2">
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-400">{projects.length}+</p>
            <p className="text-gray-500 text-xs">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-400">
              {projects.reduce((sum, p) => sum + p.stats.stars, 0)}+
            </p>
            <p className="text-gray-500 text-xs">GitHub Stars</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-400">
              {projects.reduce((sum, p) => sum + p.stats.forks, 0)}+
            </p>
            <p className="text-gray-500 text-xs">Forks</p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-2">
          <span className="w-6 h-0.5 bg-violet-500" />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.id}
              className={`relative bg-linear-to-br ${project.color} border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 group flex flex-col`}
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-400 text-xs border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>⭐ {project.stats.stars}</span>
                  <span>🍴 {project.stats.forks}</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <GitHubIcon /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalIcon /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-2">
          <span className="w-6 h-0.5 bg-violet-500" />
          Other Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all duration-300 hover:-translate-y-0.5 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{project.emoji}</span>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-300 transition-colors">
                    <GitHubIcon />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-400 transition-colors">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs text-gray-500 bg-gray-800 border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-xs text-gray-600">
                  <span>⭐ {project.stats.stars}</span>
                  <span>🍴 {project.stats.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-10 bg-gray-900/50 border border-gray-800 rounded-3xl px-8 space-y-4">
        <p className="text-2xl font-bold text-white">Want to see more?</p>
        <p className="text-gray-500">I have many more projects on my GitHub profile. Check them out!</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white font-medium transition-all hover:-translate-y-0.5"
        >
          <GitHubIcon />
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}
