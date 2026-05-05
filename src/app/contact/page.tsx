"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "mahmood@example.com",
    href: "mailto:mahmood@example.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoodhassan",
    href: "https://linkedin.com",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/mahmoodhassan",
    href: "https://github.com",
  },
  {
    icon: "🐦",
    label: "Twitter",
    value: "@mahmoodhassan",
    href: "https://twitter.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Dhaka, Bangladesh 🇧🇩",
    href: null,
  },
  {
    icon: "⏰",
    label: "Timezone",
    value: "BST (UTC+6)",
    href: null,
  },
];

const faqs = [
  {
    q: "Are you available for freelance work?",
    a: "Yes! I'm currently open to freelance projects. I work with clients globally and can accommodate different time zones.",
  },
  {
    q: "What is your typical response time?",
    a: "I usually respond within 24 hours on weekdays. For urgent matters, feel free to reach out via email directly.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I've worked with clients from the US, UK, Europe, and Southeast Asia. Communication is never an issue.",
  },
  {
    q: "What is your development process?",
    a: "I follow an agile approach — starting with requirements gathering, then design, development, testing, and deployment. I keep clients updated throughout.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">
          <span className="text-violet-400">#</span> Get In Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          Have a project in mind or just want to say hi? My inbox is always open.
          I&apos;ll try my best to get back to you!
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left: Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold text-white">Contact Details</h2>
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors"
              >
                <span className="text-xl w-8 text-center">{item.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold text-sm">Available for work</span>
            </div>
            <p className="text-gray-500 text-sm">
              Currently open to freelance projects and full-time opportunities.
              Response time: within 24 hours.
            </p>
          </div>

          {/* What I can help with */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
            <h3 className="text-white font-semibold text-sm">I can help you with:</h3>
            <ul className="space-y-2">
              {[
                "Building a new web application",
                "Improving existing codebase",
                "UI/UX design implementation",
                "Performance optimization",
                "Code review & consulting",
                "Technical mentorship",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="text-violet-400">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5"
          >
            <h2 className="text-lg font-semibold text-white mb-2">Send a Message</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm text-gray-400 font-medium">
                  Full Name <span className="text-violet-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm text-gray-400 font-medium">
                  Email Address <span className="text-violet-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-sm text-gray-400 font-medium">
                Subject <span className="text-violet-400">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              >
                <option value="" disabled className="text-gray-600">Select a subject...</option>
                <option value="freelance">Freelance Project</option>
                <option value="fulltime">Full-time Opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm text-gray-400 font-medium">
                Message <span className="text-violet-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
              />
              <p className="text-gray-600 text-xs text-right">{formData.message.length} characters</p>
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
            >
              {status === "sending"
                ? "⏳ Sending..."
                : status === "sent"
                ? "✓ Message Sent!"
                : "Send Message →"}
            </button>

            {status === "sent" && (
              <div className="text-center p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <p className="text-emerald-400 text-sm">
                  🎉 Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            <span className="text-violet-400">#</span> Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm">Quick answers to common questions.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-medium text-sm">{faq.q}</span>
                <span className={`text-violet-400 text-lg transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
