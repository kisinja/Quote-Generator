let btn = document.querySelector('#new-quote')

let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
        quote:"The best way to find yourself is to lose yourself in the service of others.",
        person: "Mahatma Gandhi"
    }, {
        quote:"If you want to live a happy life, tie it to a goal, not to people or things",
        person: "Albert Einstein"
    }, {
        quote:"At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
        person:"Aristotle"
    }, {
        quote:"Your time is limited, so don't waste it living someone else's life.",
        person:"Steve Jobs"
    }, {
        quote: "The journey of a thousand miles begins with a single step",
        person:"Lao Tzu"
    }, {
        quote: "Don't worry be happy",
        person:"Bobby McFerrin"
    }, {
        quote: "I don't believe virginity is as common as it used to be.",
        person:"Don Williams"
    }, {
        quote: "I do the very best I know how - the very best I can; and I mean to keep doing so until the end.",
        person:"Abraham Lincoln",
    }, { quote: "Our lives begin to end the moment we are quiet about the things that matter.", person: "Martin Luther King Jr",}
]

btn.addEventListener("click", generateQuotes);

function generateQuotes() {

    let random = Math.floor(Math.random() * quotes.length) 

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}

