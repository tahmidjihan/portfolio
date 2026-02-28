'use client'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div 
      className={`animate-spin ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <svg 
        className="w-full h-full" 
        viewBox="0 0 24 24" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeDasharray="60 30"
          className="opacity-20"
        />
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeDasharray="60 30"
          strokeDashoffset="15"
          className="opacity-100"
        />
      </svg>
    </div>
  )
}
