const minNumber = 1;
const maxNumber = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * maxNumber + 1)
}

console.log('Número secreto:', secretNumber)

const minNumberElement = document.getElementById('min-number');
minNumberElement.innerHTML = minNumber

const maxNumberElement = document.getElementById('max-number')
maxNumberElement.innerHTML = maxNumber