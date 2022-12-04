import React, { ReactElement } from 'react';
import Calories from '../components/Calories/Calories';
import day1 from '/data/day1.txt';

const CaloriesRoute = (): ReactElement => {
  return (
      <>
        <Calories data={day1}/>
      </>
  );

}

export default CaloriesRoute;