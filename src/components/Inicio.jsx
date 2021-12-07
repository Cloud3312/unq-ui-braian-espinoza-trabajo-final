import memoTestLogo from 'imagenes/memotestLogo.png'
import React, { useState } from 'react'
import { images2x1 } from 'utility/imagenesList2x1'
import { images4x4 } from 'utility/imagenesList4x4'
import { images8x8 } from 'utility/images8X8'
import { images5x5 } from 'utility/imagesList5x5'
import './Inicio.css'

const Inicio = ({ setJugando, setImages, setJugadores }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [players, setPlayers] = useState([{ nombre: null, puntaje: 0 }])

  const setClickedImages = (images) => (event) => {
    event.preventDefault()
    setSelectedImages(images)
    console.log(selectedImages)
  }

  const handleConfirmSubmit = (event) => {
    event.preventDefault()
    setImages(selectedImages)
    setJugadores(players)
    setJugando(true)
  }

  const setNPlayer = (numberOfPlayer) => (event) => {
    event.preventDefault()
    if (numberOfPlayer === 1) {
      setPlayers([{ nombre: 'Player 1', puntaje: 0 }])
    } else if (numberOfPlayer === 2) {
      setPlayers([
        { nombre: 'Player 1', puntaje: 0 },
        { nombre: 'Player 2', puntaje: 0 },
      ])
    }
  }
  return (
    <>
      <div className='inicio-container'>
        <form onSubmit={handleConfirmSubmit}>
          <div className='memotestLogoContainer'>
            <img className='memotestLogo' src={memoTestLogo} alt='' />
          </div>

          <div className='tableContainer'>
            <h2>Select the size of table</h2>
            <button
              className='beginningButton'
              onClick={setClickedImages(images2x1)}
            >
              Table 2x1
            </button>
            <div>
              <button onClick={setClickedImages(images4x4)}>Table 4x4</button>
              <button onClick={setClickedImages(images5x5)}>Table 5x5</button>
              <button onClick={setClickedImages(images8x8)}>Table 8x8</button>
            </div>
          </div>

          <div className='playersContainer'>
            <h2>Select number of players</h2>
            <div>
              <button onClick={setNPlayer(1)}>One player</button>
              <button onClick={setNPlayer(2)}>Two player</button>
            </div>
          </div>

          {/* si no se seleccionaron las imagenes, no se muestra el boton */}
          <div className='confirmBtnContainer'>
            {selectedImages.length !== 0 && players[0].nombre ? (
              <button className='' type='submit'>
                Confirm
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </>
  )
}

export default Inicio
