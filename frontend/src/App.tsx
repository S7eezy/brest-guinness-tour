import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => (
  <div className="bg-white text-[#2F2926] min-h-screen flex flex-col items-center pt-10 px-4">
    <header className="text-center mb-12">
      <img src="/guinness-logo.svg" alt="Guinness Logo" className="mx-auto mb-4 w-20" />
      <h1 className="text-[18px] tracking-widest font-bold uppercase">Brest <span className="text-4xl font-serif text-black mx-2">Guinness</span> Tour</h1>
    </header>

    <section className="bg-[#3A2F29] text-white rounded-xl px-6 py-10 max-w-4xl w-full shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold uppercase text-center mb-6 tracking-widest">
        Qu’est-ce que c’est ?
      </h2>
      <p className="text-sm md:text-base leading-relaxed text-center mb-10 tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
        Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
      </p>
      <div className="text-center">
        <Link
          to="/start"
          className="inline-flex items-center gap-2 bg-[#C9A75D] text-[#2F2926] font-bold uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#D4AF37] transition"
        >
          Démarrer le tour 🍺
        </Link>
      </div>
    </section>
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
