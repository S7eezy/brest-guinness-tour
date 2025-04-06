import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Brest Guinness Tour 🍺</h1>
    <p className="mt-2">Bienvenue sur le site du challenge Guinness !</p>
    <Link to="/start" className="text-blue-500 underline">Commencer une session</Link>
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
