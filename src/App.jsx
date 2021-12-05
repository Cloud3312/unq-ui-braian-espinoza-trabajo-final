import Inicio from 'components/Inicio'
import Tablero from 'components/Tablero'
import React, { useState } from 'react'
import './App.css'
function App() {
  const [jugando, setJugando] = useState(false)
  const [images, setImages] = useState([])
  const [jugadores, setJugadores] = useState([{ nombre: null, puntaje: null }])
  // const cambiarEstado = (valor) => {
  //   setJugando(valor)
  // }

  return (
    <div>
      {jugando ? (
        <Tablero
          images={images}
          setJugando={setJugando}
          jugadores={jugadores}
        />
      ) : (
        <Inicio
          setImages={setImages}
          setJugando={setJugando}
          setJugadores={setJugadores}
        />
      )}
    </div>
  )
}

export default App
