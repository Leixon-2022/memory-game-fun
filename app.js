console.log("Funkar!");

//1: Flip card...
const cards = document.querySelectorAll('.memory-card');

//2: Variabler för matchade kort
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    //3: Vi ändrar toggle til add
    this.classList.add('flip');

    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = this;
  
      return;
    }
  
    // second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();

}

function checkForMatch() {

/*     if (firstCard.dataset.framwork === secondCard.dataset.framework) {
        disableCards();
        return;
    }
    unFlipCards(); */

// Överkurs: Det nedre uttrycket är samma som utrycket ovan och kallas för ternaryoperator
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unFlipCards();

}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }
  
  function unFlipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 800);
  }


cards.forEach(card => card.addEventListener('click', flipCard));