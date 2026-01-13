import React from 'react'

const QuoteSection = () => {
  return (
   <div
  className="
    text-center text-xl font-medium py-20 px-6
    bg-gradient-to-br from-primary/10 via-white to-primary/10
  "

      style={{ fontFamily: 'var(--next-font-playfair), serif' }}
    >
      <h1 className="max-w-2xl mx-auto leading-relaxed">
        At <span className="text-4xl font-great-vibes text-primary">TheJessicaWay</span>, I empower students and young professionals to break through confusion, build <span className="text-4xl font-great-vibes text-primary">clarity</span>, and move forward with <span className="text-4xl font-great-vibes text-primary">confidence</span>.
      </h1>
    </div>
  )
}

export default QuoteSection
