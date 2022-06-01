import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import JoinusPage from './pages/joinus';
import Moreinfo from './pages/moreinfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Sidebar from './components/Sidebar';
import Digital from './components/DigitalPage';
import Fleet from './components/Fleet';
import Brand from './components/Brands';



function App() {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/joinus' element={<JoinusPage/>}/>
                <Route path='/moreinfo' element={<Moreinfo/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path='/digital' element={<Digital/>} />
                <Route path='/fleetpage' element={<Fleet/>}/>
                <Route path='/brandpage' element={<Brand/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}


export default App;