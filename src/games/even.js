const isEven = (n) => n % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const GAME_NAME = 'Answer "yes" if the number is even, otherwise answer "no".';
const ROUNDS = 3;

const runGame = (ask) => {
  console.log('Welcome to the Brain Games!');
  console.log(GAME_NAME);

  const name = ask('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < ROUNDS; i += 1) {
    const number = getRandomInt(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = ask('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
