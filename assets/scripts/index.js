'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const gameApi = require('./gameApi/api')
$(() => {
  setAPIOrigin(location, config)
  console.log(events)
  events.addHandlers()
})

let turnCount = 1
let gameBoard = []
$('#newGame').hide()
const newGameLoop = function () {
  $('.game-board td').show()
  // empties content of the table
  $('.game-board td').empty()
  // empties content of array
  gameBoard = []
  $('#newGame').hide()
}
$(document).ready(function () {
  const onClickCell = function (evt) {
    // saves the position on the board that was clicked
    const positionOnBoard = $(evt.target).data('id') // 1 or 2, etc

    // assigns an x or o based on the turn and only if cell isn't occupied
    if (turnCount % 2 === 1 && typeof gameBoard[positionOnBoard] !== 'string') {
      gameBoard[positionOnBoard] = 'x'
    //  console.log(gameBoard)
      turnCount++
    } else if (turnCount % 2 === 0 && typeof gameBoard[positionOnBoard] !== 'string') {
      gameBoard[positionOnBoard] = 'o'
    //  console.log(gameBoard)
      turnCount++
    }

    function winCondition () {
      // checks to see if the top row isn't blank(if this isn't added it conflicts with checking the other rows)
      if (gameBoard[0] && gameBoard[1] && gameBoard[2] !== '') {
        // checks if top row all match
        if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          //    $('.game-board td').off('click', onClickCell)
          if (gameBoard[0] && gameBoard[1] && gameBoard[2] === 'x') {
            $('.winAlert').text('Player X Wins!')
          } else if (gameBoard[0] && gameBoard[1] && gameBoard[2] === 'o') {
            $('.winAlert').text('Player O Wins!')
          }
        }
      }
      if (gameBoard[3] && gameBoard[4] && gameBoard[5] !== '') {
        // checks if column row match
        if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
      //    console.log('mid row')
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          //    $('.game-board td').off('click', onClickCell)
          if (gameBoard[3] && gameBoard[4] && gameBoard[5] === 'x') {
            $('.winAlert').text('Player X Wins!')
          } else if (gameBoard[3] && gameBoard[4] && gameBoard[5] === 'o') {
            $('.winAlert').text('Player O Wins!')
          }
        }
      }
      if (gameBoard[6] && gameBoard[7] && gameBoard[8] !== '') {
        // checks if bottom row all match
        if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
      //    console.log('bottom row')
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          //    $('.game-board td').off('click', onClickCell)
          if (gameBoard[6] && gameBoard[7] && gameBoard[8] === 'x') {
            $('.winAlert').text('Player X Wins!')
          } else if (gameBoard[6] && gameBoard[7] && gameBoard[8] === 'o') {
            $('.winAlert').text('Player O Wins!')
          }
        }
      }
      if (gameBoard[0] && gameBoard[3] && gameBoard[6] !== '') {
        // checks if left column all match
        if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
      //    console.log('left column')
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          //    $('.game-board td').off('click', onClickCell)
          if (gameBoard[0] && gameBoard[3] && gameBoard[6] === 'x') {
            $('.winAlert').text('Player X Wins!')
          } else if (gameBoard[0] && gameBoard[3] && gameBoard[6] === 'o') {
            $('.winAlert').text('Player O Wins!')
          }
        }
      }
      if (gameBoard[1] && gameBoard[4] && gameBoard[7] !== '') {
        // checks if mid column all match
        if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
      //    console.log('mid column')
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          //    $('.game-board td').off('click', onClickCell)
          if (gameBoard[1] && gameBoard[4] && gameBoard[7] === 'x') {
            $('.winAlert').text('Player X Wins!')
          } else if (gameBoard[4] && gameBoard[1] && gameBoard[7] === 'o') {
            $('.winAlert').text('Player O Wins!')
          }
        }
      }
      if (gameBoard[2] && gameBoard[5] && gameBoard[8] !== '') {
        // checks if right column all match
        if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
      //    console.log('right column')
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          if (gameBoard[2] && gameBoard[5] && gameBoard[8] === 'x'){
            $('.winAlert').text('Player X Wins!')}
            else if (gameBoard[2] && gameBoard[5] && gameBoard[8] === 'o'){
              $('.winAlert').text('Player O Wins!')
            }
            //    $('.game-board td').off('click', onClickCell)
        }
      }
      if (gameBoard[0] && gameBoard[4] && gameBoard[8] !== '') {
        // checks if right diagonal all match
        if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      //    console.log('back slash')
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          if (gameBoard[0] && gameBoard[4] && gameBoard[8] === 'x'){
            $('.winAlert').text('Player X Wins!')}
            else if (gameBoard[0] && gameBoard[4] && gameBoard[8] === 'o'){
              $('.winAlert').text('Player O Wins!')
            }
            //    $('.game-board td').off('click', onClickCell)
        }
      }
      if (gameBoard[2] && gameBoard[4] && gameBoard[6] !== '') {
        // checks if left diagonal all match
        if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
          $('#newGame').show()
          // hide the gameBoard
          $('.game-board td').hide()
          // click on newgame button to show the gameboard
          $('#newGame').on('click', newGameLoop)
          if (gameBoard[2] && gameBoard[4] && gameBoard[6] === 'x'){
            $('.winAlert').text('Player X Wins!')}
            else if (gameBoard[2] && gameBoard[4] && gameBoard[6] === 'o'){
              $('.winAlert').text('Player O Wins!')
            }
        }
      }
      if (gameBoard[0] && gameBoard[1] && gameBoard[2] && gameBoard[3] && gameBoard[4] && gameBoard[5] && gameBoard[6] && gameBoard[7] && gameBoard[8] !== ''){
        $('.winAlert').text('Draw')
        $('#newGame').show()
        // hide the gameBoard
        $('.game-board td').hide()
        // click on newgame button to show the gameboard
        $('#newGame').on('click', newGameLoop)
      }
    }
    winCondition()
    // add x or o to the position on the board
    $(evt.target).text(gameBoard[positionOnBoard])

  // debugger
  }
  // MAKE API CALL TO CREATE NEW GAME and on SUCCESS then run this
  gameApi.createGame(event)
  // WHEN API CALL SUCCESSFUL
  .then(() => {
    console.log('test')
    $('.game-board td').on('click', onClickCell)
  })
  // WHEN API CALL UNSUCCESSFUL
  .catch()

})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
