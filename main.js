/* eslint-disable no-unused-vars */

var $buttonStart = document.querySelector('#start')
var $seconds = document.querySelector('#seconds')
var $minutes = document.querySelector('#minutes')
var seconds = 0
var minutes = 0

function counter () {
  seconds = seconds + 1
  $seconds.textContent = seconds
  $minutes.textContent = minutes
  if (seconds >= 59) {
    seconds = 0
    minutes++
  }
}

$buttonStart.addEventListener('click', function () {
  setInterval(function () { counter() }, 1000)
})
