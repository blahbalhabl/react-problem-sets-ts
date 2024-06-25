import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Problem_1 from './pages/beginner/Problem_1';

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
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </main>
  );
};

export default App;
