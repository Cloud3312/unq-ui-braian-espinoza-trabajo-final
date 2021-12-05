import React, { useEffect, useState } from 'react'
import Card from './Card.js'
import './Tablero.css'

const Tablero = ({ images, setJugando, selectedJugadores }) => {
  const [cards, setCards] = useState([])
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [disabled, setDisabled] = useState(false)
  const [unflippedCards, setUnflippedCards] = useState(0)
  const [jugadores, setJugadores] = useState([selectedJugadores])
  const [jugadorActual, setJugadorActual] = useState(selectedJugadores[0])

  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setJugadores(selectedJugadores)
    setJugadorActual(selectedJugadores[0])
    setFirstCard(null)
    setSecondCard(null)
    setCards(shuffledCards)

    setUnflippedCards(0)
  }

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
  }

  const sumarPuntaje = () => {
    setJugadores((prevJugadores) => {
      return prevJugadores.map((jugador) => {
        if (jugador.nombre === jugadorActual.nombre) {
          return { ...jugador, puntaje: jugador.puntaje + 1 }
        } else {
          return jugador
        }
      })
    })
  }

  const pasarTurno = () => {
    if (jugadores.length >= 2) {
      const jugador = jugadores.find(
        (jugador) => jugador.nombre !== jugadorActual.nombre
      )
      setJugadorActual(jugador)
    }
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true)
      playCards()
    }
  }, [firstCard, secondCard])

  const playCards = () => {
    if (firstCard.src === secondCard.src) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.src === firstCard.src) {
            setUnflippedCards(unflippedCards + 2)

            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })
      sumarPuntaje()
      resetTurn()
    } else {
      pasarTurno()
      setTimeout(() => resetTurn(), 700)
    }
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const resetTurn = () => {
    setFirstCard(null)
    setSecondCard(null)
    setDisabled(false)
  }

  const changeState = (event) => {
    event.preventDefault()
    setJugando(false)
  }

  return (
    <div className='tableroContainer'>
      <button onClick={shuffleCards}>Reset match </button>

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
        {jugadores[0] ? (
          <h1>puntaje Jugador1: {jugadores[0].puntaje}</h1>
        ) : (
          <h1>no funciono</h1>
        )}

        {jugadores[1] ? (
          <h1>puntaje Jugador2: {jugadores[1].puntaje}</h1>
        ) : null}

        <h1>jugadorActual: {jugadorActual.nombre}</h1>
      </div>
      {unflippedCards === cards.length ? (
        <button onClick={changeState}>Play again</button>
      ) : null}
    </div>
  )
}

export default Tablero
