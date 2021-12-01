import React, { useState } from 'react'
import { images2x1 } from 'utility/imagenesList2x1'
import { images4x4 } from 'utility/imagenesList4x4'
import './Inicio.css'

const Inicio = ({ setJugando, setImages }) => {
  const [selectedImages, setSelectedImages] = useState([])

  //version con parametros
  const setClickedImages = (images) => (event) => {
    event.preventDefault()
    setSelectedImages(images)
    console.log(selectedImages)
  }

  //version que anda, pero sin parametros
  // const setClickedImages = (event) => {
  //   event.preventDefault()
  //   console.log(selectedImages)
  //   setSelectedImages(images2x1)
  //   console.log(selectedImages)
  // }

  const handleConfirmSubmit = (event) => {
    event.preventDefault()
    setImages(selectedImages)
    console.log(selectedImages)
    setJugando(true)
  }

  return (
    <>
      <div className='inicio-container'>
        {/* <button type='button' onClick={setearJugando(true)}> */}
        {/* <button onClick={cambiarEstado}> aca deberia iniciar el juego</button> */}

        {/* <button onClick={setImages(images4x4)}> Imagenes 4x4</button> */}

        <p>aca habria varios botones para setear las imagenes, 4x4,5x5, etc</p>

        <form onSubmit={handleConfirmSubmit}>
          {/* sin paraemtros */}
          {/* <button onClick={setClickedImages}>Images 2x1 sin parametro</button> */}

          {/* con parametros */}
          <button onClick={setClickedImages(images2x1)}>
            Images 2x1 con parametro
          </button>
          <button onClick={setClickedImages(images4x4)}>
            Images 4x4 con parametro
          </button>

          {selectedImages.length !== 0 ? (
            <button type='submit'> Confirm </button>
          ) : null}
        </form>
      </div>
    </>
  )
}

export default Inicio
