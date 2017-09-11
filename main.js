/* eslint-disable no-unused-vars */

var $buttonStart = document.querySelector('#start')
var $buttonStop = document.querySelector('#stop')
var $seconds = document.querySelector('#seconds')
var $minutes = document.querySelector('#minutes')
var seconds = 0
var minutes = 0
var timerId = null

function counter () {
  seconds = seconds + 1
  $seconds.textContent = seconds
  if (seconds >= 59) {
    seconds = 0
    minutes++
  }
}

function stop () {
  clearInterval(timerId)
}

$buttonStart.addEventListener('click', function () {
  timerId = setInterval(function () { counter() }, 1000)
})

$buttonStop.addEventListener('click', function () {
  stop()
})
