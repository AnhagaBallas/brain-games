#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runGame from '../src/games/even.js';

const ask = (question) => readlineSync.question(question);

runGame(ask);
