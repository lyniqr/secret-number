function checkShotValueIsValid(shot) {
    const number = +shot;

    if (invalidShot(number)){
        shotElement.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (shotMinMax(number)) {
        shotElement.innerHTML += `
        <div> O valor precisa estar entre ${minNumber} e ${maxNumber}</div>
        `
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${secretNumber}</h3>

        <button id="play-again" class="play-btn">Jogar Novamente</button>
        `
    } else if (number > secretNumber) {
        shotElement.innerHTML += `<div>O número secreto é menor <i class="fa-regular fa-circle-down"></i></div>`
    } else if (number < secretNumber) {
        shotElement.innerHTML += `<div>O número secreto é maior <i class="fa-regular fa-circle-up"></i></div>`
    }
}

function invalidShot(number) {
    return Number.isNaN(number)
}

function shotMinMax(number) {
    return number > maxNumber || number < minNumber
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload()
    }
})