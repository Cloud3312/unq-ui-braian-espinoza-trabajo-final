import Inicio from 'components/Inicio'
import Tablero from 'components/Tablero'
import React, { useState } from 'react'
import { images4x4 } from 'utility/imagenesList4x4'
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
        <Tablero images={images4x4} setJugando={setJugando} />
      ) : (
        <Inicio setImages={setImages} setJugando={setJugando} />
      )}
    </div>
  )
}

export default App
