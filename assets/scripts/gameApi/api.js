const config = require('../config.js')
const store = require('../store.js')
// this needs to be redone?
const createGame = () => {
//  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (index, value, over) => {
  return $.ajax({
    url: config.apiOrigin + '/games/:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiOrigin + 'games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  getGames,
  updateGame
}
