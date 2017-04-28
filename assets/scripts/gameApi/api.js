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

const updateGame = (data) => {
  console.log(data)
  store.user = data.user
  return $.ajax({
    url: config.apiOrigin + '/games/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGames = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame,
  getGames,
  updateGame
}
