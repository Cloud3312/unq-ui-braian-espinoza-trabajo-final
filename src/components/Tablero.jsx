import React, { useEffect, useState } from 'react'
import { images4x4 } from '../utility/imagenesList'
import Card from './Card.jsx'
import './Tablero.css'

const Tablero = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(images4x4)
  }, [])

  return (
    <div className='tableroContainer'>
      <div className='cartas-container'>
        {cards.map((card) => (
          <Card />
        ))}
      </div>
    </div>
  )
}

export default Tablero
