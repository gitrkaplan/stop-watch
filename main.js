/* eslint-disable no-unused-vars */

var $buttonStart = document.querySelector('#start')
var $buttonStop = document.querySelector('#stop')
var $buttonReset = document.querySelector('#reset')
var $seconds = document.querySelector('#seconds')
var $minutes = document.querySelector('#minutes')
var seconds = 0
var minutes = 0
var timerId = null

function counter () {
  seconds = seconds + 1
  $seconds.textContent = seconds
  $minutes.textContent = minutes
  if (seconds >= 59) {
    seconds = 0
    minutes++
  }
  if (seconds < 10) {
    $seconds.textContent = '0' + seconds
  }
  if (minutes < 10) {
    $minutes.textContent = '0' + minutes
  }
}

function stop () {
  clearInterval(timerId)
}

function reset () {
  $seconds.textContent = '00'
  $minutes.textContent = '00'
  seconds = 0
  minutes = 0
}

$buttonStart.addEventListener('click', function () {
  timerId = setInterval(function () { counter() }, 1000)
})

$buttonStop.addEventListener('click', function () {
  stop()
})

$buttonReset.addEventListener('click', function () {
  reset()
})
