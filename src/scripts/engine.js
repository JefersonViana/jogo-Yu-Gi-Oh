const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById('score_points'),
  },
  cardSprites: {
    avatar: document.getElementById('card-image'),
    cardName: document.getElementById('card-name'),
    cardType: document.getElementById('card-type'),
  },
  fieldCards: {
    player: document.getElementById('player-field-card'),
    computer: document.getElementById('computer-field-card'),
  },
  actions: {
    button: document.getElementById('next-duel'),
  },
};

const playerSides = {
  player1: "player-cards",
  computer: "computer-cards",
}

const pathImages = './src/assets/icons/'

const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    winOf: [1],
    loseOf: [2],
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician.png`,
    winOf: [2],
    loseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: `${pathImages}exodia.png`,
    winOf: [0],
    loseOf: [1],
  },
];

const getRandomCardId = async () => {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
};

const createCardImage = async (id, player) => {
  const cardImage = document.createElement('img');
  cardImage.setAttribute('height', '100px');
  cardImage.setAttribute('src', './src/assets/icons/card-back.png');
  cardImage.setAttribute('data-id', id);
  cardImage.classList.add('card');

  if (player === playerSides.player1) {
    cardImage.addEventListener('click', () => {
      setCardsField(cardImage.getAttribute('data-id'));
    });
  }

  cardImage.addEventListener('mouseover', () => {
    drawSelectCard(id)
  });

  return cardImage;
};

const drawCards = async (amount, player) => {
  for (let i = 0; i < amount; i++) {
    const randomIdCard = await getRandomCardId();
    const cardImage = await createCardImage(randomIdCard, player);
    document.getElementById(player).appendChild(cardImage);
  }
};

const initialize = () => {
  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);
};

initialize();
