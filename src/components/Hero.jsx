import React from 'react'

function Hero({ name, title, summary }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 pt-16 sm:pt-24 pb-10 sm:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Data Science Portfolio</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
              {name}
            </h2>
            <p className="mt-2 text-lg text-gray-700">{title}</p>
            <p className="mt-5 text-gray-600 max-w-xl">{summary}</p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">View Projects</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white font-medium hover:bg-black">Get in Touch</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200/60" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-white shadow-lg border border-gray-200 grid place-items-center text-sm">
              <div>
                <p className="text-gray-500">Years exp.</p>
                <p className="text-2xl font-bold text-gray-900">5+</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-xl bg-white shadow-lg border border-gray-200 grid place-items-center text-sm">
              <div>
                <p className="text-gray-500">Projects</p>
                <p className="text-2xl font-bold text-gray-900">20+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
