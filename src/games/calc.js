import runEngine from './engine.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => OPERATORS[Math.floor(Math.random() * OPERATORS.length)];

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateQuestion = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const operator = getRandomOperator();
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, operator, b);
  return [question, correctAnswer];
};

const runGame = () => runEngine(GAME_DESCRIPTION, generateQuestion);

export default runGame;
