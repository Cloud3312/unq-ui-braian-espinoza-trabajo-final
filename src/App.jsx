import Inicio from 'components/Inicio'
import Tablero from 'components/Tablero'
import React, { useState } from 'react'
import './App.css'
function App() {
  const [jugando, setJugando] = useState(false)
  const [images, setImages] = useState([])

  // const cambiarEstado = (valor) => {
  //   setJugando(valor)
  // }

  return (
    <div>
      {jugando ? (
        <Tablero images={images} setJugando={setJugando} />
      ) : (
        <Inicio setImages={setImages} setJugando={setJugando} />
      )}
    </div>
  )
}

export default App
