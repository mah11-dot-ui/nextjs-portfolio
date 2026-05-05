import Link from "next/link";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "10+", label: "Open Source Contributions" },
];

const services = [
  {
    icon: "🎨",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UIs with React, Next.js, and Tailwind CSS. Focus on performance and accessibility.",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "Scalable REST & GraphQL APIs with Node.js, Express, and NestJS. Secure, well-documented, and production-ready.",
  },
  {
    icon: "🗄️",
    title: "Database Design",
    description:
      "Efficient schema design and query optimization with PostgreSQL, MongoDB, and Redis for high-performance apps.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, Docker containerization, and deployment on AWS, Vercel, and other cloud platforms.",
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    description:
      "Fully responsive designs that look and feel great on every device — from phones to large desktops.",
  },
  {
    icon: "🔒",
    title: "Security & Auth",
    description:
      "Implementing secure authentication flows with JWT, OAuth, and role-based access control systems.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    text: "Mahmood delivered our project on time and exceeded all expectations. The code quality was outstanding and the UI was beautiful.",
    avatar: "SJ",
  },
  {
    name: "David Chen",
    role: "CTO, FinanceApp",
    text: "Working with Mahmood was a pleasure. He understood our requirements quickly and built a robust, scalable solution.",
    avatar: "DC",
  },
  {
    name: "Aisha Patel",
    role: "Product Manager, SaaSCo",
    text: "Incredible attention to detail and great communication throughout the project. Highly recommend!",
    avatar: "AP",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Mahmood Hassan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Full-Stack Developer &amp; UI/UX Enthusiast
          </p>

          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            I build beautiful, performant web applications with modern technologies.
            Passionate about clean code, great user experiences, and solving real-world problems.
          </p>

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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-violet-400 mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What I <span className="text-violet-400">Do</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              I offer a wide range of development services to help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Clients <span className="text-violet-400">Say</span>
            </h2>
            <p className="text-gray-500">Don&apos;t just take my word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to build something <span className="text-violet-400">amazing</span>?
          </h2>
          <p className="text-gray-500 text-lg">
            I&apos;m currently available for freelance work and full-time opportunities.
            Let&apos;s create something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-full border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
