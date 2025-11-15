import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import SkillBar from './components/SkillBar'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { profile, skills, projects, publications, tools } from './portfolioData'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header name={profile.name} title={profile.title} links={profile.links} />

      {/* Hero */}
      <Hero name={profile.name} title={profile.title} summary={profile.summary} />

      {/* About */}
      <Section
        id="about"
        kicker="About"
        title="From messy data to measurable impact"
        description="I turn ambiguity into experiments and models that drive the business. I partner with PMs, engineers, and stakeholders to define the right questions, build robust pipelines, evaluate tradeoffs, and ship solutions that stick."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-700">
              My work spans demand forecasting, churn prediction, and NLP pipelines. I value clarity, fast iteration, and writing things down. I love well-instrumented systems and simple baselines that outperform overfit complexity.
            </p>
            <p className="text-gray-700">
              I enjoy taking models to production, designing monitoring, and closing the loop with experimentation. If the counterfactual isn’t considered, it’s not done yet.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
            <h4 className="text-sm font-semibold text-gray-800">Toolbox</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        kicker="Projects"
        title="Selected Work"
        description="A few projects that show how I approach open-ended problems and move from exploration to delivery."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" kicker="Skills" title="What I work with">
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications" kicker="Writing" title="Publications & Posts">
        <div className="grid sm:grid-cols-2 gap-6">
          {publications.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 p-5 hover:shadow-sm bg-white">
              <p className="text-sm text-gray-500">{p.venue}</p>
              <h3 className="mt-1 font-semibold text-gray-900">{p.title}</h3>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" kicker="Contact" title="Let’s collaborate">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <p className="text-gray-700">Whether you need an MVP, an uplift in your experimentation rigor, or a production-ready ML pipeline, I can help. Send me a note and I’ll respond within a day.</p>
            <form className="mt-6 grid sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Name" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="How can I help?" rows={4} className="sm:col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">Send Message</button>
            </form>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-sm text-blue-700">
              Prefer email? Reach me at
              <a className="ml-1 underline" href="mailto:you@example.com">you@example.com</a>
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
