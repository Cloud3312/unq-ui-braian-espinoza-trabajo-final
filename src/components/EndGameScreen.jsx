import React from 'react'
import WinnerPlayer from './WinnerPlayer'

const EndGameScreen = ({ player1, player2, changeState }) => {
  return (
    <div>
      {player1.puntaje && player2 === undefined ? (
        <WinnerPlayer winnerPlayer={player1} changeState={changeState} />
      ) : null}

      {player2 && player1.puntaje > player2.puntaje ? (
        <WinnerPlayer winnerPlayer={player1} changeState={changeState} />
      ) : null}

      {player2 && player2.puntaje > player1.puntaje ? (
        <WinnerPlayer winnerPlayer={player2} changeState={changeState} />
      ) : null}
    </div>
  )
}

export default EndGameScreen
