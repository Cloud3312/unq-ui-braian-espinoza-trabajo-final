import React from 'react'
import backface from '../imagenes/interrogacion.jpg'
import './Card.css'

const Card = ({ key, card, handleChoice, cardFlipped, disabled }) => {
  // const [isFlipped, setIsFlipped] = useState(false)
  // const [hasEvent, setHasEvent] = useState(true)

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className='card'>
      <div className={cardFlipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='Card front' />
        <img
          className='back'
          src={backface}
          onClick={handleClick}
          alt='Card back'
        />
      </div>
    </div>
  )
}

export default Card
