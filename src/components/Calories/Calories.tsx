import React, { ReactElement } from 'react';

const Calories = ({data}:ICalories): ReactElement => {

  type backpack = {
    items: number[];
  };
  const inputData: string[] = data.split('\n');
  const backpacks: backpack[] = [];

  //sum the contents of one backpack 
  const sumBackpack = (backpack: backpack): number => {
    return backpack.items.reduce((sum: number, element:number) => sum + element, 0);
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

  const getCalories = (backpacks: backpack[], takeNum: number ): number => {
    const slicedArry = backpacks.slice(0, takeNum);
    return slicedArry.reduce((sum: number, backpack:backpack) => sum + sumBackpack(backpack), 0)
  };

  return (
      <div>
          <h1>Day 1: Calories</h1>
          <div>Elf carrying most amount of calories is: {getCalories(backpacks, 1)}</div>
          <div>The sum of the calories of the 3 elves carrying the most calories: {getCalories(backpacks, 3)}</div>
      </div>
  );

}

interface ICalories {
  data: string;
}

export default Calories;