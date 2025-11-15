import React from 'react'
import { ExternalLink, FileCode, FileText } from 'lucide-react'

function ProjectCard({ title, description, tags, links }) {
  const iconFor = (type) => {
    switch (type) {
      case 'code':
        return <FileCode size={16} />
      case 'report':
        return <FileText size={16} />
      default:
        return <ExternalLink size={16} />
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-5">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {t}
          </span>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="mt-4 flex gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900"
            >
              {iconFor(l.type)}
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
