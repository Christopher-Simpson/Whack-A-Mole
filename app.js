const square = document.querySelectorAll('.square')
const crab = document.querySelectorAll('.crab')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('crab')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('crab')

    //pass randomPositionId to hitPosition
    hitPosition = randomPosition.id
}


square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
            hitPosition=null
        }
    })
})


function moveCrab() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveCrab()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    
    if(currentTime === 0 ) {
        clearInterval(timerId)
        alert('Game Over! Your final score is' + ' ' + result)
    }
}


let timerId = setInterval(countDown, 1000)