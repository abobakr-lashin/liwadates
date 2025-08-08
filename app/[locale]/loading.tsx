import React from 'react'
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <span className="loading loading-spinner text-primary dark:text-blue-400 w-12 h-12 sm:w-16 sm:h-16"></span>
    </div>
  )
}
