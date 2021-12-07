import React from 'react'
import './WinnerPlayer.css'
const WinnerPlayer = ({ winnerPlayer, changeState }) => {
  return (
    <div>
      <div>
        <h1>
          The winner is {winnerPlayer.nombre} with {winnerPlayer.puntaje} points
        </h1>

        <button className='playAgainBtn' onClick={changeState}>
          Play again
        </button>
      </div>
    </div>
  )
}

export default WinnerPlayer
