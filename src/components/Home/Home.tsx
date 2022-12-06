import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Advent of Code 2022</h1>
      <nav>
        <ul>
          <li>
            <Link to="calories">Day 1 Calories</Link>
          </li>
          <li><Link to="rpsgame">Day 2 RPS</Link></li>
          <li><Link to="rucksacks">Day 3 Rucksacks</Link></li>
          <li>
            <Link to="campcleanup">Day 4 Camp Cleanup</Link>
          </li>
          <li>
            <Link to="stacking">Day 5 Stacking</Link>
          </li>
          <li>
            <Link to="receiver">Day 6 Receiver</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
