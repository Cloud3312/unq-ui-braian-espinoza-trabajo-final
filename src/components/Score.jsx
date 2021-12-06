import React from 'react'
import './Score.css'

const Score = ({ player1, player2, actualPlayer }) => {
  return (
    <div className='score'>
      <h1>Score player 1: {player1.puntaje}</h1>

      {player2 ? <h1>Score player 2: {player2.puntaje}</h1> : null}

      <h1>Actual player: {actualPlayer.nombre}</h1>
    </div>
  )
}

export default Score
