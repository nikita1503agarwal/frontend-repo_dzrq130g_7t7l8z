import React from 'react'

function Section({ id, kicker, title, description, children }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {(kicker || title) && (
          <div className="mb-10">
            {kicker && (
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">{kicker}</p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
            )}
            {description && (
              <p className="mt-3 text-gray-600 max-w-3xl">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
