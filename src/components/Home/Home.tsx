import { Link } from "react-router-dom";
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Advent of Code 2022</h1>
        <nav>
        <ul>
          <li>
            <Link to="calories">Day 1 Calories</Link>
          </li>
          <li>
            add links to Day 2
          </li>
          <li>
            add links to Day 3
          </li>
          <li>
            <Link to="campcleanup">Day 4 Camp Cleanup</Link>
          </li>
        </ul>
        </nav>
     
    </div>
  );
}

export default Home;