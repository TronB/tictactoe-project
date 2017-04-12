'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})
const gameBoard = []
let turnCount = 1
$(document).ready(function(){

  const onClickCell = function (evt) {
    // saves the position on the board that was clicked
    const positionOnBoard = $(evt.target).data("id") // 1 or 2, etc

    // assigns an x or o based on the turn
    if (turnCount % 2 === 1){
      gameBoard[positionOnBoard] = "x"
    } else {
      gameBoard[positionOnBoard] = "o"
    }

    // add x or o to the position on the board
    $(evt.target).text(gameBoard[positionOnBoard])

    // increment turnCount
    turnCount++

    // if (typeof sqNum !== 'string') {
    //   const player1 = 'X'
    //   return player1}
    // else {
    //   return false
    // }
    debugger;
  }

  $('.game-board td').on('click', onClickCell)

  console.log('what')
})



// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
