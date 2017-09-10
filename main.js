/* eslint-disable no-unused-vars */

var $buttonStart = document.querySelector('#start')
var $seconds = document.querySelector('#seconds')
var $minutes = document.querySelector('#minutes')
var time = 0

function counter () {
  time = time + 1
  $seconds.textContent = time
}

$buttonStart.addEventListener('click', function () {
  setInterval(function () { counter() }, 1000)
})

// Miscellaneous test code - Disregard

/* function count() {
  var i = 0
  for (i = 0; i <= 60; i++) {
    counter()
    setInterval(counter(), 1000)
  }
} */

/* function timer () {
  seconds++
  if (seconds >= 60) {
    seconds = 0
    minutes++
  }
} */

/* function timer () {
  setTimeout(timer, 1000)
  for (s = 0; s <= 0; s++) {
    seconds++
    console.log(seconds)
    if (s => 60) {
      minutes = 0
    }
  }
}
*/
