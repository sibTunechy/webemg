import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import JoinusPage from './pages/joinus';



function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/joinus' element={<JoinusPage/>}/>
            </Routes>
        </Router>
    )
}


export default App;