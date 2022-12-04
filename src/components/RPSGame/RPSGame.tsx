import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
// Part 1
// X Rock
// Y Paper
// Z Scissors
// A Rock
// B Paper
// C Scissors
// Scoring
// (1 for Rock, 2 for Paper, and 3 for Scissors)
// (0 if you lost, 3 if the round was a draw, and 6 if you won
// Part 2
// X Lose
// Y Draw
// Z Win
const RPSGame = ({ data }: IData): ReactElement => {
  const rpsElfToPlayer: { [key: string]: string } = {
    A: "X",
    B: "Y",
    C: "Z",
  };

  const rpsRulesElfWin: { [key: string]: string } = {
    A: "Z",
    B: "X",
    C: "Y",
  };

  const rpsRulesElfLose: { [key: string]: string } = {
    A: "Y",
    B: "Z",
    C: "X",
  };

  const playerShapeScore: { [key: string]: number } = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const loseDrawWin: { [key: string]: number } = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  const calculateScore = (): [number, number] => {
    const lines: string[] = data.split("\n");
    let part1Score: number = 0;
    let part2Score: number = 0;

    for (let i = 0; i < lines.length; i++) {
      const line: string = lines[i];
      const lineArray: string[] = line.split(" ");
      const elf: string = lineArray[0];
      const player: string = lineArray[1];
      part1Score += calculateGameScorePart1(elf, player);
      part2Score += calculateGameScorePart2(elf, player);
    }

    return [part1Score, part2Score];
  };

  const calculateGameScorePart1 = (elf: string, player: string): number => {
    let gameScore: number = 0;
    // Shape Score
    gameScore += playerShapeScore[player];

    if (rpsElfToPlayer[elf] === player) {
      // draw
      gameScore += 3;
    } else if (rpsRulesElfWin[elf] === player) {
      // elf wins
    } else {
      gameScore += 6;
    }
    return gameScore;
  };

  const calculateGameScorePart2 = (elf: string, player: string): number => {
    let gameScore: number = 0;
    // Game Score
    gameScore += loseDrawWin[player];

    // Decide what is players shape depending on what the game outcome is
    switch (player) {
      case "X": {
        // Player Lose
        gameScore += playerShapeScore[rpsRulesElfWin[elf]];
        break;
      }
      case "Y": {
        // Draw
        gameScore += playerShapeScore[rpsElfToPlayer[elf]];
        break;
      }
      case "Z": {
        // Player Win
        gameScore += playerShapeScore[rpsRulesElfLose[elf]];
        break;
      }
    }
    return gameScore;
  };

  const [part1Score, part2Score] = calculateScore();

  return (
    <div>
      <h2>Day 2: Rock Paper Scissors</h2>
      <div>
        The total score if everything goes exactly according to the strategy
        guide Part 1: {part1Score}
      </div>
      <div>
        The total score if everything goes exactly according to the strategy
        guide Part 2: {part2Score}
      </div>
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default RPSGame;
