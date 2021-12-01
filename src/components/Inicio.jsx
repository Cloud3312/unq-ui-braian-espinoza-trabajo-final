import React from 'react'
import './Inicio.css'

const Inicio = ({ setJugando }) => {
  const cambiarEstado = (event) => {
    event.preventDefault()
    setJugando(true)
  }

  return (
    <>
      <div className='inicio-container'>
        {/* <button type='button' onClick={setearJugando(true)}> */}
        <button onClick={cambiarEstado}> aca deberia volver al inicio</button>
        {/* <button onClick={setImages(images2x1)}> imagenes cortas</button> */}
        <p>dasdasdasdasasd</p>
        <p>dasdasdasdasasd</p>
        <p>dasdasdasdasasd</p>
        <p>dasdasdasdasasd</p>
        <p>dasdasdasdasasd</p>
        <p>dasdasdasdasasd</p>
      </div>
      <div>
        <button onClick={cambiarEstado}> aca deberia volver al inicio</button>
      </div>
    </>
  )
}

export default Inicio
