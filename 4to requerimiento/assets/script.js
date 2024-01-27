const divA = document.querySelector('#a')
const divB = document.querySelector('#b')
const divC = document.querySelector('#c')
const divD = document.querySelector('#d')

const chageBackgroundColor = (event) => {
    event.target.style.backgroundColor = "black"
}

divA.addEventListener("click", chageBackgroundColor)
divB.addEventListener("click", chageBackgroundColor)
divC.addEventListener("click", chageBackgroundColor)
divD.addEventListener("click", chageBackgroundColor)