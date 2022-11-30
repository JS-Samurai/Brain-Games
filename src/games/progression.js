import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const min = 1;
const max = 50;
const minStep = 1;
const maxStep = 50;
const minLength = 4;
const maxLength = 9;

const getRandomProgression = () => {
  const progression = [];
  const progressionStart = getRandomNumber(min, max);
  const progressionStep = getRandomNumber(minStep, maxStep);
  const progressionLength = getRandomNumber(minLength, maxLength);
  progression.push(progressionStart);
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getRound = () => {
  const progression = getRandomProgression();
  const index = getRandomIndex(progression);
  const correctAnswer = String(progression[index]);
  progression.splice(index, 1, '..');
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    rounds.push(getRound());
  }
  run(description, rounds);
};

export default runProgression;
