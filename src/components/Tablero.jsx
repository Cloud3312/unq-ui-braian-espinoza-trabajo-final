import React, { useEffect, useState } from 'react'
import Card from './Card.js'
import './Tablero.css'

const Tablero = ({ images }) => {
  const [cards, setCards] = useState([])
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [score, setScore] = useState(0)
  const [disabled, setDisabled] = useState(false)

  // const [unflippedCards, setUnflippedCards] = useState([]) //cartas que no matchearon
  // const [disabledCards, setDisabledCards] = useState([]) //cartas que matchearon

  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    //setCartasHastaAhora([]);
    setFirstCard(null)
    setSecondCard(null)
    setCards(shuffledCards)
    setScore(0)
  }

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true)
      if (firstCard.src === secondCard.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 700)
      }
    }
  }, [firstCard, secondCard])

  const resetTurn = () => {
    setFirstCard(null)
    setSecondCard(null)
    setDisabled(false)
  }

  return (
    <div className='tableroContainer'>
      <button onClick={shuffleCards}>New Game </button>
      <div className='cartas-container'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            cardFlipped={
              card === firstCard || card === secondCard || card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
      <div className='score'>
        <h1>Puntuacion: {score}</h1>
      </div>
    </div>
  )
}

export default Tablero
