// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhysicianForm from './PhysicianForm';

export default function App() {
  return (
    <Router>
      <>
        <div>
          <Routes >
          <Route path='/' element={<PhysicianForm />} />
          </Routes>

        </div> 
      </>
    </Router>
  )
}
