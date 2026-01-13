import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white max-w-8xl w-full mx-auto'>
      {children}
    </div>
  )
}

export default Container