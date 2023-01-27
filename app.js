console.log("Funkar!");

//1: Flip card...
const cards = document.querySelectorAll('.memory-card');

//2: Variabler för matchade kort
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    //2: Vi ändrar toggle till add
    this.classList.add('flip');
    //2: Nu kan vi hålla reda på om vi har vänt kort
   if (!hasFlippedCard) {
        hasFlippedCard = true;
       firstCard = this;
       return;
   }
    secondCard = this;
    
    //hasFlippedCard = false;
     //3: Vi kallar funktionen här
    checkForMatch();
    //När vi har kollat av våran match och gjort det som ska göras...
    //Då anropar vi increment(); och uppdaterar antalet gissningar..
    increment();
}

//3: Vi checkar om korten matchar här
function checkForMatch() {
      if (firstCard.dataset.framework === secondCard.dataset.framework) {   
            disableCards();
            return;
          }
     
       unflipCards();
       
       // Ett elegantare sätt att skriva denna kod är med en 
       // Ternary-operator. Då ser samma kod ovan ut som såhär.
  /*      let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch ? disableCards() : unflipCards(); */
   
   }

   function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
       
       resetBoard();
}
    
  
function unflipCards() {
    lockBoard = true;

       setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
           //lockBoard = false;
           resetBoard();
       }, 1200);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

/**
 * Vi håller reda på antalet drag = gissningar...
 */
let count = 1;
function increment() {
    if (count === 1) {
        document.querySelector("#counter").innerHTML =
        "Du har gissat <br />" + count + " gång.";
    } else {
        document.querySelector("#counter").innerHTML =
        "Du har gissat <br />" + count + " gånger.";
    }
    count++;
}


cards.forEach(card => card.addEventListener('click', flipCard));