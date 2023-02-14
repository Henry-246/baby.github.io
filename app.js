const gen = document.querySelector('#gen')
const quotes = document.querySelector('.quotes')
const person = document.querySelector('.person')

let meyou = data

function getQuotes(){
    const random = Math.floor(Math.random() * meyou.length)

    quotes.innerHTML = meyou[random].quotes
    person.innerHTML = meyou[random].person
}
gen.addEventListener('click', getQuotes)