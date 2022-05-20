import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import JoinusPage from './pages/joinus';
import Moreinfo from './pages/moreinfo';



function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/joinus' element={<JoinusPage/>}/>
                <Route path='/moreinfo' element={<Moreinfo/>}/>
            </Routes>
        </Router>
    )
}


export default App;