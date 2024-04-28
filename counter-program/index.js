// COUNTER PROGRAM

const decreaseBtn = document.getElementById('decreaseBtn')
const increaseBtn = document.getElementById('increaseBtn')
const resetBtn = document.getElementById('resetBtn')
const countLabel = document.getElementById('countLabel')

increaseBtn.onclick = () => {
    countLabel.textContent++
}

decreaseBtn.onclick = () => {
    countLabel.textContent--
}

resetBtn.onclick = () => {
    countLabel.textContent = 0
}

