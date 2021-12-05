import React, { useState } from 'react'
import { images2x1 } from 'utility/imagenesList2x1'
import { images4x4 } from 'utility/imagenesList4x4'
import './Inicio.css'

const Inicio = ({ setJugando, setImages, setJugadores }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [players, setPlayers] = useState([{ nombre: null, puntaje: null }])

  //version con parametros
  const setClickedImages = (images) => (event) => {
    event.preventDefault()
    setSelectedImages(images)
    console.log(selectedImages)
  }

  const handleConfirmSubmit = (event) => {
    event.preventDefault()
    setImages(selectedImages)
    setJugadores(players)
    console.log(`jugadores AAAAA ${players[1]}`)
    setJugando(true)
  }

  const setNPlayer = (numberOfPlayer) => (event) => {
    event.preventDefault()
    if (numberOfPlayer === 1) {
      setPlayers([{ nombre: 'Jugador 1', puntaje: 0 }])
    } else if (numberOfPlayer === 2) {
      setPlayers([
        { nombre: 'Jugador 1', puntaje: 0 },
        { nombre: 'Jugador 2', puntaje: 0 },
      ])
    }
  }
  return (
    <>
      <div className='inicio-container'>
        <p>aca habria varios botones para setear las imagenes, 4x4,5x5, etc</p>

        <form onSubmit={handleConfirmSubmit}>
          <button onClick={setClickedImages(images2x1)}>
            Images 2x1 con parametro
          </button>
          <button onClick={setClickedImages(images4x4)}>
            Images 4x4 con parametro
          </button>

          <button onClick={setNPlayer(1)}>One player</button>
          <button onClick={setNPlayer(2)}>Two player</button>

          {/* si no se seleccionaron las imagenes, no se muestra el boton */}
          {selectedImages.length !== 0 && players.length !== 0 ? (
            <button type='submit'> Confirm </button>
          ) : null}
        </form>
      </div>
    </>
  )
}

export default Inicio
