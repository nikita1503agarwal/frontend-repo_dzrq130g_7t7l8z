import React from 'react'
import { Github, Linkedin, Mail, Menu } from 'lucide-react'

function Header({ name, title, links }) {
  const iconFor = (type) => {
    switch (type) {
      case 'github':
        return <Github size={18} />
      case 'linkedin':
        return <Linkedin size={18} />
      default:
        return <Mail size={18} />
    }
  }

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-semibold">
            {name?.[0] || 'D'}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h1 className="text-base font-semibold text-gray-900 leading-tight">{name}</h1>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6">
          <a href="#about" className="text-sm text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-sm text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#skills" className="text-sm text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#publications" className="text-sm text-gray-700 hover:text-blue-600">Publications</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          {links?.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600"
              aria-label={l.label}
            >
              {iconFor(l.type)}
            </a>
          ))}
          <button className="sm:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
