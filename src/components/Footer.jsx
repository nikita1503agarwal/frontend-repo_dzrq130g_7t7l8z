import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {year} — Built with love for data and clarity.</p>
        <div className="text-xs text-gray-500">Open to opportunities · Remote or SF Bay Area</div>
      </div>
    </footer>
  )
}

export default Footer
