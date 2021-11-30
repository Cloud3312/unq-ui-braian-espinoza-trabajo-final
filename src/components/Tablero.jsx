import React, { useEffect, useState } from 'react'
import { images4x4 } from '../utility/imagenesList4x4.js'
import Card from './Card.js'
import './Tablero.css'

const Tablero = () => {
  const [cards, setCards] = useState([])
  const [firstCard, setFirstCard] = useState({ name: null, number: null })
  const [secondCard, setSecondCard] = useState({ name: null, number: null })
  const [score, setScore] = useState(0)

  const [unflippedCards, setUnflippedCards] = useState([]) //cartas que no matchearon
  const [disabledCards, setDisabledCards] = useState([]) //cartas que matchearon

  useEffect(() => {
    shuffleArray(images4x4)
    setCards(images4x4)
  }, [])

  useEffect(() => {
    checkForMatch()
  }, [secondCard])

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name
      match ? disableCards() : unflipCards()
    }
  }

  const disableCards = () => {
    setDisabledCards(
      disabledCards.concat([firstCard.number, secondCard.number])
    )
    setScore(score + 1)
    console.log(disabledCards)
    resetCards()
  }

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number])
    resetCards()
  }

  const resetCards = () => {
    setFirstCard({ name: null, number: null })
    setSecondCard({ name: null, number: null })
  }

  const flipCard = (name, number) => {
    //esto te salva de romperse, si son la misma carta
    if (firstCard.name === name && firstCard.number === number) {
      return 0
    } else if (!firstCard.name) {
      setFirstCard({ name, number }) //si no existe, se setea
    } else if (!secondCard.name) {
      setSecondCard({ name, number }) //si no existe, se setea
    }
    return 1
  }

  useEffect(() => {
    checkForMatch()
  }, [secondCard])

  return (
    <div className='tableroContainer'>
      <div className='cartas-container'>
        {cards.map((card, index) => (
          <Card
            name={card.player}
            number={index}
            frontFace={card.src}
            flipCard={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
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
