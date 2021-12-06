import React, { useEffect, useState } from 'react'
import Card from './Card.js'
import Score from './Score.jsx'
import './Tablero.css'

const Tablero = ({ images, setPlay, selectedJugadores: selectedPlayers }) => {
  const [cards, setCards] = useState([])
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [unflippedCards, setUnflippedCards] = useState(0)
  const [players, setPlayers] = useState([selectedPlayers])
  const [actualPlayer, setActualPlayer] = useState(selectedPlayers[0])

  //mezcla las cartas e inicializa todo
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setPlayers(selectedPlayers)
    setActualPlayer(selectedPlayers[0])
    resetTurn()
    setCards(shuffledCards)

    setUnflippedCards(0)
  }

  //elige en que parte setear la carta seleccionada
  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
  }

  const sumScore = () => {
    setPlayers((prevJugadores) => {
      return prevJugadores.map((jugador) => {
        if (jugador.nombre === actualPlayer.nombre) {
          return { ...jugador, puntaje: jugador.puntaje + 1 }
        } else {
          return jugador
        }
      })
    })
  }

  const passTurn = () => {
    if (players.length >= 2) {
      const jugador = players.find(
        (jugador) => jugador.nombre !== actualPlayer.nombre
      )
      setActualPlayer(jugador)
    }
  }

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
      sumScore()
      resetTurn()
    } else {
      passTurn()
      setTimeout(() => resetTurn(), 700)
    }
  }

  const resetTurn = () => {
    setFirstCard(null)
    setSecondCard(null)
    setDisabled(false)
  }

  const changeState = (event) => {
    event.preventDefault()
    setPlay(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true)
      playCards()
    }
  }, [firstCard, secondCard])

  return (
    <div className='tableroContainer'>
      <div className='topBoardContainer'>
        <button onClick={shuffleCards}>Reset match </button>
        <Score
          player1={players[0]}
          player2={players[1]}
          actualPlayer={actualPlayer}
        />
      </div>

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
      {/* <div className='score'>
        <h1>puntaje Jugador1: {players[0].puntaje}</h1>

        {players[1] ? <h1>puntaje Jugador2: {players[1].puntaje}</h1> : null}

        <h1>jugadorActual: {actualPlayer.nombre}</h1>
      </div> */}

      {unflippedCards === cards.length ? (
        <button onClick={changeState}>Play again</button>
      ) : null}
    </div>
  )
}

export default Tablero
