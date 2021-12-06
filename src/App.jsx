import Inicio from 'components/Inicio'
import Tablero from 'components/Tablero'
import React, { useState } from 'react'
import './App.css'
function App() {
  const [play, setPlay] = useState(false)
  const [images, setImages] = useState([])
  const [selectedJugadores, setSelectedJugadores] = useState([
    { nombre: null, puntaje: 0 },
  ])

  return (
    <div>
      {play ? (
        <Tablero
          images={images}
          setPlay={setPlay}
          selectedJugadores={selectedJugadores}
        />
      ) : (
        <Inicio
          setImages={setImages}
          setJugando={setPlay}
          setJugadores={setSelectedJugadores}
        />
      )}
    </div>
  )
}

export default App
