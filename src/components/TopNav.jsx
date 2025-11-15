import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function TopNav() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <div className="rounded-full border border-gray-200 bg-white/90 backdrop-blur shadow-sm px-2 py-1 flex items-center gap-1">
        <Link to="/" className={`px-3 py-1.5 text-sm rounded-full ${isActive('/') ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Data Scientist</Link>
        <Link to="/designer" className={`px-3 py-1.5 text-sm rounded-full ${isActive('/designer') ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>UI/UX Designer</Link>
      </div>
    </div>
  )
}

export default TopNav
