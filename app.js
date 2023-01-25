console.log("Funkar!");

//1: Flip card...
const cards = document.querySelectorAll('.memory-card');

//2: Variabler för matchade kort
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {

    //2: Vi ändrar toggle till add
    this.classList.add('flip');
    //2: Nu kan vi hålla reda på om vi har vänt kort
   if (!hasFlippedCard) {
        hasFlippedCard = true;
       firstCard = this;
       return;
   }
    secondCard = this;
    
    hasFlippedCard = false;
     //3: Vi kallar funktionen här
    checkForMatch();
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
    
}
    
  
function unflipCards() {
       setTimeout(() => {
         firstCard.classList.remove('flip');
           secondCard.classList.remove('flip');
       }, 800);
}


cards.forEach(card => card.addEventListener('click', flipCard));