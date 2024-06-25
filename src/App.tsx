import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
// Beginner Problems
import Problem_1 from './pages/beginner/Problem_1';
import Problem_2 from './pages/beginner/Problem_2';
import Problem_3 from './pages/beginner/Problem_3';
import Problem_4 from './pages/beginner/Problem_4';
import Problem_5 from './pages/beginner/Problem_5';

const App = () => {
  return (
    <main className='px-[400px]'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/beginner/problem_1'
            element={<Problem_1 />}
          />
          <Route
            path='/beginner/problem_2'
            element={<Problem_2 />}
          />
          <Route
            path='/beginner/problem_3'
            element={<Problem_3 />}
          />
          <Route
            path='/beginner/problem_4'
            element={<Problem_4 />}
          />
          <Route
            path='/beginner/problem_5'
            element={<Problem_5 />}
          />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </main>
  );
};

export default App;
