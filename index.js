let homeScoreEl = document.getElementById('homeScore')
let guestScoreEl = document.getElementById('guestScore')

let firstEl = document.getElementById('first-q')
let secondEl = document.getElementById('second-q')
let thirdEl = document.getElementById('third-q')
let fourthEl = document.getElementById('fourth-q')
let fifthEl = document.getElementById('fifth-q')
let foulHEl = document.getElementById('foulh-el')
let foulGel = document.getElementById('foulg-el')

firstEl.classList.add('active')

function setHomeLead () {
  guestScoreEl.style.textDecoration = 'none'
  homeScoreEl.style.textDecoration = 'underline'
}

function setGuestLead () {
  guestScoreEl.style.textDecoration = 'underline'
  homeScoreEl.style.textDecoration = 'none'
}

function add1 (team) {
  if (team === 'home') {
    let res = parseInt(homeScoreEl.textContent) + 1
    homeScoreEl.textContent = res
  } else {
    let res = parseInt(guestScoreEl.textContent) + 1
    guestScoreEl.textContent = res
  }
  checkLeading()
}

function add2 (team) {
  if (team === 'home') {
    let res = parseInt(homeScoreEl.textContent) + 2
    homeScoreEl.textContent = res
  } else {
    let res = parseInt(guestScoreEl.textContent) + 2
    guestScoreEl.textContent = res
  }
  checkLeading()
}

function add3 (team) {
  if (team === 'home') {
    let res = parseInt(homeScoreEl.textContent) + 3
    homeScoreEl.textContent = res
  } else {
    let res = parseInt(guestScoreEl.textContent) + 3
    guestScoreEl.textContent = res
  }
  checkLeading()
}

function newGame () {
  firstEl.classList.add('active')
  homeScoreEl.textContent = 0
  guestScoreEl.textContent = 0
  firstEl.classList.remove('previous')
  secondEl.classList.remove('active')
  secondEl.classList.remove('previous')
  thirdEl.classList.remove('active')
  thirdEl.classList.remove('previous')
  fourthEl.classList.remove('active')
  fourthEl.classList.remove('previous')
  fifthEl.classList.remove('active')
  fifthEl.classList.remove('previous')
  foulHEl.textContent = 0
  foulGel.textContent = 0
}

function checkLeading () {
  if (
    parseInt(homeScoreEl.textContent) === parseInt(guestScoreEl.textContent)
  ) {
    guestScoreEl.style.textDecoration = 'none'
    homeScoreEl.style.textDecoration = 'none'
  } else if (
    parseInt(homeScoreEl.textContent) > parseInt(guestScoreEl.textContent)
  ) {
    setHomeLead()
  } else if (
    parseInt(homeScoreEl.textContent) < parseInt(guestScoreEl.textContent)
  ) {
    setGuestLead()
  }
}

function setActive (period) {
  if (period === 1) {
    firstEl.classList.add('active')
    firstEl.classList.add('previous')
    fourthEl.classList.remove('active')
    thirdEl.classList.remove('active')
    secondEl.classList.remove('active')
    fifthEl.classList.remove('active')
  } else if (period === 2) {
    secondEl.classList.add('active')
    secondEl.classList.add('previous')
    firstEl.classList.remove('active')
    fourthEl.classList.remove('active')
    thirdEl.classList.remove('active')
    fifthEl.classList.remove('active')
  } else if (period === 3) {
    thirdEl.classList.add('active')
    thirdEl.classList.add('previous')
    secondEl.classList.remove('active')
    firstEl.classList.remove('active')
    fourthEl.classList.remove('active')
    fifthEl.classList.remove('active')
  } else if (period === 4) {
    fourthEl.classList.add('active')
    fourthEl.classList.add('previous')
    thirdEl.classList.remove('active')
    secondEl.classList.remove('active')
    firstEl.classList.remove('active')
    fifthEl.classList.remove('active')
  } else if (period === 5) {
    fifthEl.classList.add('active')
    fifthEl.classList.add('previous')
    fourthEl.classList.remove('active')
    thirdEl.classList.remove('active')
    secondEl.classList.remove('active')
    firstEl.classList.remove('active')
  }
}

function addFoul (team) {
  if (team === 'home') {
    let res = parseInt(foulHEl.textContent) + 1
    foulHEl.textContent = res
  } else if (team === 'guest') {
    let res = parseInt(foulGel.textContent) + 1
    foulGel.textContent = res
  }
}
