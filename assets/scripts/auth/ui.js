'use strict'
// remove signIn and signOut
const store = require('../store.js')

// remove me before code-along
const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
  // add a message that sign in was successful
  $('.messages').text('Sign in successful, click on the board to start a game ' + data.user.email)
  // hide  signup form $('#sign-up').addClass('hidden')
  $('#sign-up').addClass('hidden')
  // show sign out button
  $('#sign-out').removeClass('hidden')
  // show change password form
  $('#change-password').removeClass('hidden')
  // show start game button
  $('#newGame').removeClass('hidden')
  // hide sign in button after successful signIn
  $('#sign-in').addClass('hidden')
}

const signInFailure = (error) => {
  console.log(error)
  $('.messages').text('Sign in failed, please try again!')
}

const signUpSuccess = (data) => {
  console.log(data)
  $('.messages').text('Sign up successful, please sign in ' + data.user.email)
  // use jquery to add a message to the screenthat sign up was a success
}

const signUpFailure = (data) => {
  console.log(data)
  $('.messages').text('Sign up failed, please try again!')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  $('.messages').text('Password successfully changed!')
}

const changePassWordFailure = (error) => {
  console.log(error)
  $('.messages').text('Password change failed, try again!')
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
  $('.messages').text('You signed out, thanks for playing!')
  $('#sign-out').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
}

const signOutFailure = () => {
  $('messages').text('Sign out failed, please try again!')
}
module.exports = {
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePassWordFailure,
  signUpSuccess,
  signUpFailure,
  signInFailure
}
