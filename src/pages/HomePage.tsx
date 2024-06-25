import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Click on the links above to see the problems.</p>
      <ul>
        <li>
          <Link to='/beginner/problem_1'>Problem 1</Link>
        </li>
        <li>
          <Link to='/beginner/problem_2'>Problem 2</Link>
        </li>
        <li>
          <Link to='/beginner/problem_3'>Problem 3</Link>
        </li>
        <li>
          <Link to='/beginner/problem_4'>Problem 4</Link>
        </li>
        <li>
          <Link to='/beginner/problem_5'>Problem 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
