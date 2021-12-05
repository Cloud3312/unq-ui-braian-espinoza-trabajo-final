import Inicio from 'components/Inicio'
import Tablero from 'components/Tablero'
import React, { useState } from 'react'
import './App.css'
function App() {
  const [jugando, setJugando] = useState(false)
  const [images, setImages] = useState([])
  const [selectedJugadores, setSelectedJugadores] = useState([
    { nombre: null, puntaje: 0 },
  ])

  return (
    <div>
      {jugando ? (
        <Tablero
          images={images}
          setJugando={setJugando}
          selectedJugadores={selectedJugadores}
        />
      ) : (
        <Inicio
          setImages={setImages}
          setJugando={setJugando}
          setJugadores={setSelectedJugadores}
        />
      )}
    </div>
  )
}

export default App
