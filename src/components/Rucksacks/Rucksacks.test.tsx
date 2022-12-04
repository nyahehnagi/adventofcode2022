import { render } from '@testing-library/react';
import React from 'react';
import Rucksack from './Rucksacks';

describe('Rucksacks', () => {

const mockData = "vJrwpWtwJgWrhcsFMMfFFhFp\n" +
"jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n" +
"PmmdzqPrVvPwwTWBwg\n" +
"wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n" +
"ttgJtRGJQctTZtZT\n" +
"CrZsJsPPZsGzwwsLwLmpwMDw"

  it('should render', () => {
    const { container } = render(<Rucksack data={mockData}/>);
    expect(container).toBeTruthy();
  } );
  
  it('should display the correct number for part 1', () => {
    const { container } = render(<Rucksack data={mockData}/>);
    expect(container.textContent).toContain("157");
  } );

  it('should display the correct number for part 2', () => {
    const { container } = render(<Rucksack data={mockData}/>);
    expect(container.textContent).toContain("70");
  } );

});