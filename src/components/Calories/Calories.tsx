import React, { ReactElement } from 'react';

const Calories = ({data}:ICalories): ReactElement => {

  type backpack = {
    items: number[];
  };
  const inputData: string[] = data.split('\n');
  const backpacks: backpack[] = [];

  //sum the contents of one backpack 
  const sumBackpack = (backpack: backpack): number => {
    let sum = 0;
    backpack.items.forEach((item) => {
      sum += item;
    });
    return sum;
  };

  const sortBackpacks = (backpacks: backpack[]): backpack[] => {
    return backpacks.sort((a, b) => {
       return sumBackpack(a) - sumBackpack(b);
    }).reverse();; 
  };

  const setUpBackPacks = (inputData: string[], backpacks:backpack[]): void => {
    let backpack: backpack = { items: [] };
    inputData.forEach((item) => {
      if (item === '') {
        backpacks.push(backpack);
        backpack = { items: [] };
      } else {
        backpack.items.push(parseInt(item));
      }
    });
    backpacks.push(backpack);
    sortBackpacks(backpacks);
  };

  setUpBackPacks(inputData, backpacks);

  // get backpack with largest total calories
  const getLargestCalories = (backpacks: backpack[]): number => {
    return sumBackpack(backpacks[0]);
  };

  const getTop3Calories = (backpacks: backpack[]): number => {
    return sumBackpack(backpacks[0]) + sumBackpack(backpacks[1]) + sumBackpack(backpacks[2]);
  };
  
  return (
      <div>
          <h1>Day 1: Calories</h1>
          <div>Elf carrying most amount of calories is: {getLargestCalories(backpacks)}</div>
          <div>The sum of the calories of the elves carrying the most calories: {getTop3Calories(backpacks)}</div>
      </div>
  );

}

interface ICalories {
  data: string;
}

export default Calories;