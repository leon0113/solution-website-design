import React from 'react'

const CheckBox = () => {
  return (
    <div className="flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm">
  <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd" />
    </svg>
    <p className="ml-3 text-sm font-bold text-green-600">Successfully Toast Message !</p>
  </div>
  </div>
  )
}

export default CheckBox