import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => (
  <div className="bg-background text-text min-h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-xl">
      <h1 className="text-5xl md:text-6xl font-display text-gold font-bold mb-6">
        Brest Guinness Tour
      </h1>
      <p className="text-gray-300 text-lg md:text-xl font-sans mb-10">
        12 bars. 1 challenge. Beaucoup de Guinness.
      </p>
      <Link
        to="/start"
        className="inline-block bg-gold text-background font-semibold px-8 py-4 rounded-md hover:bg-goldLight transition"
      >
        Commencer le tour
      </Link>
    </div>
  </div>
)

const Start = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Démarrer une session</h2>
    <p className="mt-2">Cette page servira à initier le challenge depuis un bar.</p>
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  )
}

export default App
