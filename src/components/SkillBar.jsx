import React from 'react'

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2.5 bg-blue-600 rounded-full transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default SkillBar
