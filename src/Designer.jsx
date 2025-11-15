import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import SkillBar from './components/SkillBar'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import {
  designerProfile as profile,
  designerSkills as skills,
  caseStudies as projects,
  designerPublications as publications,
  designerTools as tools,
} from './designerData'

function Designer() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header name={profile.name} title={profile.title} links={profile.links} />

      <section className="bg-gradient-to-b from-fuchsia-50 via-white to-white border-b border-fuchsia-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm font-semibold text-fuchsia-700">UI & UX Portfolio</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Designing clarity for complex products</h2>
              <p className="mt-3 text-gray-700">{profile.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.slice(0, 8).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-900 border border-fuchsia-200">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-fuchsia-100 p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-[1/1] rounded-lg bg-fuchsia-100" />
                <div className="aspect-[1/1] rounded-lg bg-fuchsia-100" />
                <div className="aspect-[1/1] rounded-lg bg-fuchsia-100" />
                <div className="col-span-3 aspect-[3/1] rounded-lg bg-fuchsia-100" />
              </div>
              <p className="mt-3 text-xs text-gray-500">Exploration tiles: layouts, components, and flows</p>
            </div>
          </div>
        </div>
      </section>

      <Section id="projects" kicker="Case Studies" title="Selected Work" description="Outcomes, not just pixels.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="skills" kicker="Expertise" title="Core skills">
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </Section>

      <Section id="publications" kicker="Writing" title="Talks & Articles">
        <div className="grid sm:grid-cols-2 gap-6">
          {publications.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 p-5 hover:shadow-sm bg-white">
              <p className="text-sm text-gray-500">{p.venue}</p>
              <h3 className="mt-1 font-semibold text-gray-900">{p.title}</h3>
            </a>
          ))}
        </div>
      </Section>

      <Section id="contact" kicker="Contact" title="Let’s work together">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <p className="text-gray-700">Have a challenging workflow, messy IA, or need a design system that scales? I can help design, test, and ship it.</p>
            <form className="mt-6 grid sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Name" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <textarea placeholder="What are you building?" rows={4} className="sm:col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-fuchsia-600 px-4 py-2 text-white font-medium hover:bg-fuchsia-700">Send Message</button>
            </form>
          </div>
          <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-xl p-5">
            <p className="text-sm text-fuchsia-700">Prefer email? Reach me at <a className="ml-1 underline" href="mailto:designer@example.com">designer@example.com</a></p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default Designer
