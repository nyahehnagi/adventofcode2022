import { render } from '@testing-library/react';
import React from 'react';
import Calories from './Calories';

describe('Calories', () => {
  const mockData: string = "1000\n2000\n\n1000\n2000\n3000\n\n1000"

  it('should render', () => {
    const { container } = render(<Calories data={mockData}/>);
    expect(container).toBeTruthy();
  } );

  it('it should render the sum of the top 3 calories', () => {
    const { getByText } = render(<Calories data={mockData}/>);
    expect(getByText('The sum of the calories of the 3 elves carrying the most calories: 10000')).toBeTruthy();
  });

  it('it should render the largest calories', () => {
    const { getByText } = render(<Calories data={mockData}/>);
    expect(getByText('Elf carrying most amount of calories is: 6000')).toBeTruthy();
  });

});