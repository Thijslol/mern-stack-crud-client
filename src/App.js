import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamplesList from './views/ExampleList';
import AddExample from './views/AddExample';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            MERN Stack CRUD
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Examples
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Example
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<ExamplesList />} />
          <Route path="/create" element={<AddExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;