import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const min = 1;
const max = 50;

const getRandomOperator = () => operators[getRandomIndex(operators)];

const operation = (a, operator, b) => [a, operator, b];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getNewRound = () => {
  const firstRandomNum = getRandomNumber(min, max);
  const secondRandomNum = getRandomNumber(min, max);
  const operator = getRandomOperator();
  const question = (`Question: ${firstRandomNum} ${operator} ${secondRandomNum}`);
  const correctAnswer = (String(calculate(firstRandomNum, secondRandomNum, operator)));
  return [question, correctAnswer];
};

const runCalc = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    rounds.push(getNewRound());
  }
  run(rules, rounds);
};

export default runCalc;
