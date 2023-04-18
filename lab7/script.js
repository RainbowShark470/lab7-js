const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
];

const players2 = [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
];

const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

function printGoals(...players) {
    console.log(`${players.length} голов забили игроки: ${players.join(', ')}`);
}

console.log(`Команда ${team1 < team2 ? game.team1 : game.team2} победит!`);

//2 задача

const game1 = {
    team1: 'Бавария',
    team2: 'Боруссия Дортмунд',
    players: [
      [
        'Неуэль',
        'Павар',
        'Мартинес',
        'Алаба',
        'Давид Алаба',
        'Киммих',
        'Горетцка',
        'Коман',
        'Мюллер',
        'Гнарби',
        'Левандовски'
      ],
      [
        'Бюрки',
        'Хуммельс',
        'Аканджи',
        'Шмель',
        'Геррейро',
        'Витсель',
        'Дауд',
        'Ройс',
        'Холанд',
        'Беллингем'
      ]
    ],
  
    score: '4:0',
    scored: ['Левандовски', 'Гнарби', 'Левандовски', 'Хуммельс'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5
    }
  };
  
  game1.scored.forEach((player, index) => {
    console.log(`Гол ${index + 1}: ${player}`);
  });
  
  let totalOdds = 0;
let numberOfOdds = 0;
for (const odd of Object.values(game1.odds)) {
  totalOdds += odd;
  numberOfOdds++;
}

const averageOdds = totalOdds / numberOfOdds;
console.log(`Средний коэффициент: ${averageOdds}`);

console.log(`Коэффициент на победу "${game1.team1}": ${game1.odds.team1}`);
console.log(`Коэффициент на ничью: ${game1.odds.x}`);
console.log(`Коэффициент на победу "${game1.team2}": ${game1.odds.team2}`);

const scorers = {};
for (const player of game1.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//3 задача

const gameEvents = {
  17: '⚽ ГОЛ',
  36: '🔄 Замена',
  47: '⚽ ГОЛ',
  61: '🟨 Желтая карточка',
  64: '🟥 Красная карточка',
  69: '🔄 Замена',
  70: '🔄 Замена',
  72: '🟨 Желтая карточка',
  76: '⚽ ГОЛ',
  80: '⚽ ГОЛ',
  92: '🟥 Красная карточка'
};

//Создайте массив 'events' из различных событий, произошедших во время игры (без дубликатов).
const events = [...new Set(Object.values(gameEvents))];
console.log(events);

//Удалите желтую карточку на 64-й минуте.
delete gameEvents[64];
console.log(gameEvents);

//Вычислите и запишите в консоль следующую строку: "Событие происходило, в среднем, каждые 9 минут"
const gameMinutes = Object.keys(gameEvents);
const gameDuration = 90;
const eventFrequency = gameDuration / gameMinutes.length;
console.log(`Событие происходило, в среднем, каждые ${eventFrequency} минут`);

//Переберите 'gameEvents' и запишите каждый элемент в консоль, отмечая в первом или во втором тайме игры.
for (const [minute, event] of Object.entries(gameEvents)) {
  const timeHalf = minute <= 45 ? 'ПЕРВЫЙ ТАЙМ' : 'ВТОРОЙ ТАЙМ';
  console.log(`[${timeHalf}] ${minute} : ${event}`);
}

//4 задача

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');

btn.addEventListener('click', function() {
  const text = input.value;
  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const words = lines[i].split('_');
    let output = words[0];
    
    for (let j = 1; j < words.length; j++) {
      output += words[j][0].toUpperCase() + words[j].slice(1);
    }
    
    console.log(output);
  }
});

