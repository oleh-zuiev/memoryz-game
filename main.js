console.log('ready to code');
const allCards = [
    {
        name: 'fries',
        img:'./images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:'./images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'./images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'./images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'./images/milkshake.png'
    },
    {
        name: 'pizza',
        img:'./images/pizza.png'
    },
    {
        name: 'fries',
        img:'./images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:'./images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'./images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'./images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'./images/milkshake.png'
    },
    {
        name: 'pizza',
        img:'./images/pizza.png'
    },  
     
]
  allCards.sort(() => 0.5 - Math.random())
//    ------------
const gridRef = document.querySelector('.grid');
const resultRef = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// -----------------

function createField() {
    for (let i = 0; i < allCards.length; i += 1){
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png'); 
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridRef.appendChild(card);
    }
    
}
// ------------------
const flipCard = function () {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(allCards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', allCards[cardId].img);
    // if (cardsChosen.length === 2) {
    //     setTimeout(checkForMatch, 500);
    // }
}
// ------------------
createField();
console.log(allCards);