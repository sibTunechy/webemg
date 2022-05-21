import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import JoinusPage from './pages/joinus';
import Moreinfo from './pages/moreinfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <Navbar toggle={toggle}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/joinus' element={<JoinusPage/>}/>
                <Route path='/moreinfo' element={<Moreinfo/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}


export default App;