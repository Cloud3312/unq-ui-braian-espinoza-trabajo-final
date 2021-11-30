import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import backface from '../imagenes/interrogacion.jpg'
import './Card.css'

const Card = ({
  name,
  number,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [hasEvent, setHasEvent] = useState(true)

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700)
    }
  }, [unflippedCards])

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false)
    }
  }, [disabledCards])

  const handleClick = (event) => {
    const value = flipCard(name, number)
    if (value !== 0) {
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className='backface'
          src={backface}
          alt='backface'
          onClick={hasEvent ? handleClick : null}
        />
        <img
          className='frontface'
          src={frontFace}
          alt='frontFace'
          onClick={hasEvent ? handleClick : null}
        />
      </ReactCardFlip>
    </div>
  )
}

export default Card
