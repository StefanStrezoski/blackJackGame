'use strict';

const dealerScore = document.querySelector('.dealer--total');
const playerScore = document.querySelector('.player--total');
const btnHit = document.querySelector('.btn--hit');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnNewDeck = document.querySelector('.btn--new--deck');
const gameResults = document.querySelector('.resultOfGame');
const dealerCardSymbols = document.querySelector('.dealerCardSymbols');
const playerCardSymbols = document.querySelector('.playerCardSymbols');

dealerScore.textContent = 0;
playerScore.textContent = 0;

let dealerTotal = 0;
let playerTotal = 0;
let dealerCards = [];
let playerCards = [];

// Состојба на игра true/false (се игра/ прекинува игра);
let playing = true;

const init = function () {
  playing = true;
  dealerTotal = 0;
  playerTotal = 0;
  dealerCards = [];
  playerCards = [];
  gameResults.textContent = '...';
  // Почетно делење на карти на крупие
  dealerCards.push(deck[pickCard()], deck[pickCard()]);
  // Бришење на карти што се извлечени
  for (let i = 0; i < dealerCards.length; i++) {
    const index = deck.indexOf(dealerCards[i]);
    if (index > -1) {
      deck.splice(index, 1);
    }
  }
  // Додавање на вредностите на почетните карти
  dealerTotal = cardValues(dealerCards[0]) + cardValues(dealerCards[1]);
  // Приказ на вкупна вредност на карти
  dealerScore.textContent = dealerTotal;
  dealerCardSymbols.textContent = dealerCards;

  // Почетно делење карти на играчот
  playerCards.push(deck[pickCard()], deck[pickCard()]);
  // Бришење на карти што се извлечени
  for (let i = 0; i < playerCards.length; i++) {
    const index = deck.indexOf(playerCards[i]);
    if (index > -1) {
      deck.splice(index, 1);
    }
  }
  // Додавање на вредностите на почетните карти
  playerTotal = cardValues(playerCards[0]) + cardValues(playerCards[1]);
  // Приказ на вкупна вредност на карти
  playerScore.textContent = playerTotal;
  // Приказ на картите
  playerCardSymbols.textContent = playerCards;
};

// Шпил од карти
let deck = [
  'A-♠',
  '2-♠',
  '3-♠',
  '4-♠',
  '5-♠',
  '6-♠',
  '7-♠',
  '8-♠',
  '9-♠',
  '10-♠',
  'J-♠',
  'Q-♠',
  'K-♠',
  'A-♣',
  '2-♣',
  '3-♣',
  '4-♣',
  '5-♣',
  '6-♣',
  '7-♣',
  '8-♣',
  '9-♣',
  '10-♣',
  'J-♣',
  'Q-♣',
  'K-♣',
  'A-♥',
  '2-♥',
  '3-♥',
  '4-♥',
  '5-♥',
  '6-♥',
  '7-♥',
  '8-♥',
  '9-♥',
  '10-♥',
  'J-♥',
  'Q-♥',
  'K-♥',
  'A-♦',
  '2-♦',
  '3-♦',
  '4-♦',
  '5-♦',
  '6-♦',
  '7-♦',
  '8-♦',
  '9-♦',
  '10-♦',
  'J-♦',
  'Q-♦',
  'K-♦',
  'A-♠',
  '2-♠',
  '3-♠',
  '4-♠',
  '5-♠',
  '6-♠',
  '7-♠',
  '8-♠',
  '9-♠',
  '10-♠',
  'J-♠',
  'Q-♠',
  'K-♠',
  'A-♣',
  '2-♣',
  '3-♣',
  '4-♣',
  '5-♣',
  '6-♣',
  '7-♣',
  '8-♣',
  '9-♣',
  '10-♣',
  'J-♣',
  'Q-♣',
  'K-♣',
  'A-♥',
  '2-♥',
  '3-♥',
  '4-♥',
  '5-♥',
  '6-♥',
  '7-♥',
  '8-♥',
  '9-♥',
  '10-♥',
  'J-♥',
  'Q-♥',
  'K-♥',
  'A-♦',
  '2-♦',
  '3-♦',
  '4-♦',
  '5-♦',
  '6-♦',
  '7-♦',
  '8-♦',
  '9-♦',
  '10-♦',
  'J-♦',
  'Q-♦',
  'K-♦',
];

// Креирање нов шпил карти (во случај кога шпилот ќе се потроши *такви се правилата*)
const newDeck = function () {
  deck = [
    'A-♠',
    '2-♠',
    '3-♠',
    '4-♠',
    '5-♠',
    '6-♠',
    '7-♠',
    '8-♠',
    '9-♠',
    '10-♠',
    'J-♠',
    'Q-♠',
    'K-♠',
    'A-♣',
    '2-♣',
    '3-♣',
    '4-♣',
    '5-♣',
    '6-♣',
    '7-♣',
    '8-♣',
    '9-♣',
    '10-♣',
    'J-♣',
    'Q-♣',
    'K-♣',
    'A-♥',
    '2-♥',
    '3-♥',
    '4-♥',
    '5-♥',
    '6-♥',
    '7-♥',
    '8-♥',
    '9-♥',
    '10-♥',
    'J-♥',
    'Q-♥',
    'K-♥',
    'A-♦',
    '2-♦',
    '3-♦',
    '4-♦',
    '5-♦',
    '6-♦',
    '7-♦',
    '8-♦',
    '9-♦',
    '10-♦',
    'J-♦',
    'Q-♦',
    'K-♦',
    'A-♠',
    '2-♠',
    '3-♠',
    '4-♠',
    '5-♠',
    '6-♠',
    '7-♠',
    '8-♠',
    '9-♠',
    '10-♠',
    'J-♠',
    'Q-♠',
    'K-♠',
    'A-♣',
    '2-♣',
    '3-♣',
    '4-♣',
    '5-♣',
    '6-♣',
    '7-♣',
    '8-♣',
    '9-♣',
    '10-♣',
    'J-♣',
    'Q-♣',
    'K-♣',
    'A-♥',
    '2-♥',
    '3-♥',
    '4-♥',
    '5-♥',
    '6-♥',
    '7-♥',
    '8-♥',
    '9-♥',
    '10-♥',
    'J-♥',
    'Q-♥',
    'K-♥',
    'A-♦',
    '2-♦',
    '3-♦',
    '4-♦',
    '5-♦',
    '6-♦',
    '7-♦',
    '8-♦',
    '9-♦',
    '10-♦',
    'J-♦',
    'Q-♦',
    'K-♦',
  ];
  // console.log(deck.length);
};

// Рандом бројка за бирање на карта
const pickCard = function () {
  return Math.trunc(Math.random() * deck.length);
};

// Вредности на картите според правилата на играта
const cardValues = function (card) {
  if (card === 'A-♠' || card === 'A-♣' || card === 'A-♥' || card === 'A-♦') {
    return 1;
  } else if (
    card === '2-♠' ||
    card === '2-♣' ||
    card === '2-♥' ||
    card === '2-♦'
  ) {
    return 2;
  } else if (
    card === '3-♠' ||
    card === '3-♣' ||
    card === '3-♥' ||
    card === '3-♦'
  ) {
    return 3;
  } else if (
    card === '4-♠' ||
    card === '4-♣' ||
    card === '4-♥' ||
    card === '4-♦'
  ) {
    return 4;
  } else if (
    card === '5-♠' ||
    card === '5-♣' ||
    card === '5-♥' ||
    card === '5-♦'
  ) {
    return 5;
  } else if (
    card === '6-♠' ||
    card === '6-♣' ||
    card === '6-♥' ||
    card === '6-♦'
  ) {
    return 6;
  } else if (
    card === '7-♠' ||
    card === '7-♣' ||
    card === '7-♥' ||
    card === '7-♦'
  ) {
    return 7;
  } else if (
    card === '8-♠' ||
    card === '8-♣' ||
    card === '8-♥' ||
    card === '8-♦'
  ) {
    return 8;
  } else if (
    card === '9-♠' ||
    card === '9-♣' ||
    card === '9-♥' ||
    card === '9-♦'
  ) {
    return 9;
  } else if (
    card === '10-♠' ||
    card === '10-♣' ||
    card === '10-♥' ||
    card === '10-♦' ||
    card === 'J-♠' ||
    card === 'J-♣' ||
    card === 'J-♥' ||
    card === 'J-♦' ||
    card === 'Q-♠' ||
    card === 'Q-♣' ||
    card === 'Q-♥' ||
    card === 'Q-♦' ||
    card === 'K-♠' ||
    card === 'K-♣' ||
    card === 'K-♥' ||
    card === 'K-♦'
  ) {
    return 10;
  }
};

init();

// Функционалност на HIT копчето
btnHit.addEventListener('click', function () {
  if (playing) {
    // Влечење на карти на играчот
    const newCard = deck[pickCard()];
    const index = deck.indexOf(newCard);
    playerCards.push(newCard);
    playerTotal += cardValues(newCard);
    playerScore.textContent = playerTotal;
    playerCardSymbols.textContent += `,${newCard}`;
    if (index > -1) {
      deck.splice(index, 1);
    }
    if (playerTotal > 21) {
      playing = false;
      gameResults.textContent = 'You lost';
    } else if (playerTotal === 21) {
      gameResults.textContent =
        'You win. Congrats! Браво, ај сеа гитла доста се коцкаш!';
      playing = false;
    }
    if (deck.length === 0) {
      gameResults.textContent = 'End of deck. Press New Game to load new deck!';
      playing = false;
    }
    //console.log(deck.length);
  }
});

// Функционалност на HOLD Копчето
btnHold.addEventListener('click', function () {
  if (playing) {
    // Влечење на карти се додека крупието нема вкупна вредност од 17
    while (dealerTotal < 17) {
      const newCard = deck[pickCard()];
      const index = deck.indexOf(newCard);
      dealerCards.push(newCard);
      dealerTotal += cardValues(newCard);
      dealerCardSymbols.textContent += `,${newCard}`;
      if (index > -1) {
        deck.splice(index, 1);
      }
    }
    dealerScore.textContent = dealerTotal;
    if (
      (dealerTotal > playerTotal && dealerTotal > 21) ||
      (playerTotal > dealerTotal && playerTotal <= 21)
    ) {
      gameResults.textContent =
        'You win. Congrats!';
      playing = false;
    } else if (
      (dealerTotal > playerTotal && dealerTotal <= 21) ||
      playerTotal > 21
    ) {
      gameResults.textContent = 'House wins';
      playing = false;
    } else if (playerTotal === dealerTotal) {
      gameResults.textContent = 'TIE';
      playing = false;
    } else if (dealerTotal === 21) {
      gameResults.textContent = 'House wins';
      playing = false;
    }

    if (deck.length === 0) {
      gameResults.textContent = 'End of deck. Press New Deck to load new deck!';
      playing = false;
    }
  }
});

btnNew.addEventListener('click', init);

btnNewDeck.addEventListener('click', newDeck);
btnNewDeck.addEventListener('click', init);
