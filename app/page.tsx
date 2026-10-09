"use client";

import { useState } from "react";

const projects = [
  {
    title: "UnivGeeks",
    description:
      "An educational platform for students featuring study notes, previous-year question papers and learning resources.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: "📚",
    color: "from-cyan-500/20 to-blue-600/20",
    img: "/univgeeks.png",
    link: "",
  },
  {
    title: "WhatsApp Dashboard",
    description:
      "A messaging dashboard concept featuring QR connection, contact management and single or bulk messaging.",
    tech: ["Node.js", "Express", "Baileys"],
    icon: "💬",
    color: "from-emerald-500/20 to-cyan-600/20",
    img: "/dashboard.png",
    link: "https://baileys-api-production-aa68.up.railway.app/",
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive restaurant website concept for showcasing menus, services, reviews and contact information.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🍽️",
    color: "from-orange-500/20 to-pink-600/20",
    img: "/restaurant.png",
    link: "https://spicegardenrestro.netlify.app/",
  },
  {
    title: "Gym Website",
    description:
      "A fitness website concept featuring workout programs, membership details and trainer information.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🏋️",
    color: "from-violet-500/20 to-purple-600/20",
    img: "/gym.png",
    link: "https://fitverse-gym001.netlify.app/",
  },
  {
    title: "Landscaping Website",
    description:
      "A nature-inspired website concept showcasing gardening, lawn care and outdoor design services.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🌿",
    color: "from-green-500/20 to-emerald-600/20",
    img: "/landscaping.png",
    link: "https://sankhalaenterpreneure.netlify.app/",
  },
];

const skills = [
  { name: "HTML", icon: "🌐", level: "Web structure" },
  { name: "CSS", icon: "🎨", level: "Web styling" },
  { name: "JavaScript", icon: "⚡", level: "Interactivity" },
  { name: "React", icon: "⚛️", level: "UI development" },
  { name: "Next.js", icon: "▲", level: "Web applications" },
  { name: "Tailwind CSS", icon: "💨", level: "Rapid styling" },
  { name: "Git", icon: "🔀", level: "Version control" },
  { name: "GitHub", icon: "🐙", level: "Code collaboration" },
];

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    description: "Modern websites to help businesses build an online presence.",
  },
  {
    icon: "💼",
    title: "Portfolio Websites",
    description: "Personal portfolios for students, creators and professionals.",
  },
  {
    icon: "📊",
    title: "Dashboards",
    description: "Dashboard interfaces for managing information and workflows.",
  },
  {
    icon: "🍽️",
    title: "Restaurant Websites",
    description: "Menu, services and contact information in a responsive design.",
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    description: "Focused pages for products, campaigns and new ideas.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Layouts designed to work across mobile, tablet and desktop.",
  },
];

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Certificate", "#experience"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#home"
            className="gradient-text text-2xl font-black tracking-tight transition-transform duration-300 hover:scale-105"
          >
            Portfolio<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link text-sm font-medium text-slate-300"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="btn-animated hidden rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 sm:inline-block"
          >
            Let&apos;s Talk ↗
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl transition hover:border-cyan-400 hover:text-cyan-400 lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="glass border-t border-white/10 px-6 py-4 lg:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="animated-bg relative flex min-h-screen items-center px-6 pb-20 pt-32"
      >
        <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="slide-up">
            <div className="glass mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-slate-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              B.Tech Student · Aspiring Web Developer
            </div>

            <p className="mb-4 text-lg font-medium text-cyan-400">
              Hello, welcome to my portfolio 
            </p>

            <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Shivani
              <br />
              <span className="gradient-text">Gehlot.</span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
              Web Developer &amp; Creative Coder
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I enjoy building modern websites, interactive dashboards and
              digital experiences. I turn ideas into clean, responsive and
              user-friendly interfaces.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-animated rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-6 py-3.5 font-bold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span>📍 Jodhpur, Rajasthan</span>
              <span>🎓 MBM University</span>
            </div>
          </div>

          <div className="slide-left delay-200 flex justify-center">
            <div className="relative">
              <div className="float-animation absolute -inset-5 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-2xl" />

              <div className="profile-glow relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-900 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <img
                  src="/profile.jpg"
                  alt="Shivani Gehlot"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="glass float-animation absolute -left-8 top-12 rounded-2xl px-4 py-3 shadow-xl sm:-left-16">
                <p className="text-sm font-bold text-cyan-300">
                  💻 Web Development
                </p>
              </div>

              <div className="glass float-animation-slow absolute -bottom-3 -right-5 rounded-2xl px-4 py-3 shadow-xl sm:-right-12">
                <p className="text-sm font-bold text-violet-300">
                  🤖 Robotics Workshop
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-2xl text-slate-500 transition hover:text-cyan-400 md:block"
        >
          ↓
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="slide-up mb-12">
            <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              ABOUT ME
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              A little about <span className="gradient-text">me.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass glow-box rounded-3xl p-7 sm:p-9">
              <h3 className="text-2xl font-bold">Curious mind. Creative ideas.</h3>

              <p className="mt-5 leading-8 text-slate-400">
                I am pursuing my B.Tech degree at MBM University, Jodhpur.
                I am interested in web development, technology, automation
                and creating useful digital products.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                I enjoy learning by building projects and exploring how
                design and technology can work together to solve real problems.
              </p>

              <a
                href="#projects"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-4"
              >
                Discover my projects <span>→</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["🎓", "Education", "B.Tech, MBM University"],
                ["📍", "Based in", "Jodhpur, Rajasthan"],
                ["💻", "Focus", "Websites & Dashboards"],
                ["🤖", "Also interested in", "Robotics & Automation"],
              ].map(([icon, title, description], index) => (
                <div
                  key={title}
                  className={`glass glow-box rounded-2xl p-6 slide-up delay-${(index + 1) * 100}`}
                >
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-5 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative bg-white/[0.025] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="slide-up">
            <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              MY TOOLKIT
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Skills &amp; <span className="gradient-text">technologies.</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Technologies I have been learning and using to build websites
              and digital projects.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass glow-box slide-up delay-${((index % 5) + 1) * 100} rounded-2xl p-5 sm:p-7`}
              >
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="mt-5 text-lg font-bold">{skill.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{skill.level}</p>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-500">
         {  /* Skill indicators are visual styling, not measured proficiency scores.*/}
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="slide-up">
              <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
                SELECTED WORK
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Featured <span className="gradient-text">projects.</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-400">
             {/* A selection of websites and dashboard projects I have worked on
              or developed as concepts.*/}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass glow-box group overflow-hidden rounded-3xl"
              >
                <div
                  className={`image-zoom relative flex h-52 items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={`${project.title} website screenshot`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="float-animation relative text-7xl transition-transform duration-500 group-hover:scale-110">
                      {project.icon}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
                    Project 0{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-4"
                    >
                      View project <span>↗</span>
                    </a>
                  ) : (
                    <p className="mt-7 text-sm text-slate-500">
                      Project link can be added here.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white/[0.025] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="slide-up">
            <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              WHAT I CAN BUILD
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Services &amp; <span className="gradient-text">solutions.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass glow-box rounded-2xl p-7"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROBOTICS CERTIFICATE */}
      <section id="experience" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="slide-up">
            <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              LEARNING &amp; ACHIEVEMENTS
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Robotics <span className="gradient-text">workshop.</span>
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <div className="glass glow-box image-zoom rounded-3xl p-3">
              <img
                src="/robotics-certificate.jpg"
                alt="Robotics Summer Workshop certificate"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="slide-left">
              <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                🏅 Hands-on Workshop · 2026
              </span>

              <h3 className="mt-6 text-3xl font-bold sm:text-4xl">
                Robotics Summer Workshop
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Participated in a 30-day hands-on Robotics Summer Workshop
                organized by the Embedded Systems &amp; Robotics Club (ESRC),
                Department of Computer Science &amp; Engineering, MBM University,
                Jodhpur.
              </p>

              <div className="mt-8 space-y-4">
                <div className="glass rounded-xl p-4">
                  <p className="text-sm text-slate-500">Organization</p>
                  <p className="mt-1 font-semibold">
                    Embedded Systems &amp; Robotics Club (ESRC)
                  </p>
                </div>

                <div className="glass rounded-xl p-4">
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="mt-1 font-semibold">
                    15 June – 14 July 2026
                  </p>
                </div>

                <div className="glass rounded-xl p-4">
                  <p className="text-sm text-slate-500">Institution</p>
                  <p className="mt-1 font-semibold">
                    MBM University, Jodhpur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Have an idea?
            <br />
            <span className="gradient-text">Let&apos;s build it.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Have a website idea, a collaboration proposal or a project in mind?
            I would love to hear from you.
          </p>

          <a
            href="mailto:shivanigehlot49@gmail.com"
            className="btn-animated mt-9 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950"
          >
            ✉ Email Me <span>↗</span>
          </a>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Email",
                icon: "✉️",
                detail: "Send me an email",
                href: "mailto:shivanigehlot49@gmail.com",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                detail: "Professional profile",
                href: "https://www.linkedin.com/in/shivani-gehlot-a100b63a3",
              },
              {
                name: "GitHub",
                icon: "🐙",
                detail: "Code & repositories",
                href: "https://github.com/shivanigehlot49-png",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Email" ? undefined : "_blank"}
                rel={item.name === "Email" ? undefined : "noopener noreferrer"}
                className="glass glow-box rounded-2xl p-6"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
     {/* PREMIUM ANIMATED FOOTER */}
<footer className="relative overflow-hidden border-t border-white/10 bg-[#030611] px-6 pt-16 pb-8">

  {/* Background glow */}
  <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Top section */}
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <a
          href="#home"
          className="gradient-text text-3xl font-black"
        >
          Portfolio<span className="text-cyan-400">.</span>
        </a>

        <p className="mt-5 max-w-xs leading-7 text-slate-400">
          Web Developer &amp; Creative Coder passionate about building
          modern websites, creative interfaces and digital experiences.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          📍 Jodhpur, Rajasthan, India
        </p>
      </div>

      {/* Quick links */}
      <div>
        <h3 className="text-lg font-bold text-white">
          Quick Links
        </h3>

        <div className="mt-5 space-y-3">
          {[
            ["Home", "#home"],
            ["About Me", "#about"],
            ["My Skills", "#skills"],
            ["Projects", "#projects"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block w-fit text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
            >
              {label} →
            </a>
          ))}
        </div>
      </div>

      {/* Explore */}
      <div>
        <h3 className="text-lg font-bold text-white">
          Explore
        </h3>

        <div className="mt-5 space-y-3">
          {[
            ["Services", "#services"],
            ["Certificate", "#experience"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block w-fit text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
            >
              {label} →
            </a>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-bold text-white">
          Let&apos;s Connect
        </h3>

        <p className="mt-5 leading-7 text-slate-400">
          Have an idea or a project? Let&apos;s create something amazing.
        </p>

        <a
          href="mailto:shivanigehlot49@gmail.com"
          className="btn-animated mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
        >
          Contact Me ↗
        </a>

        <div className="mt-5 flex gap-3">
          <a
               
            href="https://www.linkedin.com/in/shivani-gehlot-a100b63a3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-11 w-11 items-center justify-center rounded-xl font-bold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            in
          </a>

          <a
               
            href="https://github.com/shivanigehlot49-png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-11 w-11 items-center justify-center rounded-xl font-bold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            GH
          </a>
        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

    {/* Bottom section */}
    <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

      <p className="text-sm text-slate-500">
       {/* © {new Date().getFullYear()} Shivani Gehlot. All rights reserved. */}
      </p>

      <p className="text-sm text-slate-500">
       {/* Designed with <span className="text-cyan-400">♥</span> and built with Next.js & Tailwind CSS.*/}
      </p>

      <a
        href="#home"
        className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
      >
        Back to Top
        <span className="transition-transform duration-300 group-hover:-translate-y-1">
          ↑
        </span>
      </a>

    </div>

  </div>
</footer>
</main>
);
}