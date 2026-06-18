import readlineSync from 'readline-sync';

const ROUNDS = 3;

const ask = (question) => readlineSync.question(question);

const runEngine = (gameDescription, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const name = ask('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, correctAnswer] = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = ask('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
