import Board from 'components/Board'
import Inicio from 'components/Inicio'
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
        <Board
          images={images}
          setPlay={setPlay}
          selectedPlayers={selectedJugadores}
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
