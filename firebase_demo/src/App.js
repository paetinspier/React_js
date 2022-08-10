import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Dashboard from './Pages/Dashboard';
import {Suspense} from 'react';



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/signUpPage' element={<SignUpPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
