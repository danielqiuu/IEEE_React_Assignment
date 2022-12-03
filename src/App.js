
import Message from './components/Message'
import Contact from './components/contact'
import Intro from './components/intro'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import React, {useState} from "react";


function App() {
    const username = 'daniel';
    const [currentClass, setCurrentClass] = useState('')

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                 <p>The url for this page: http://ieee.utoronto.ca/{currentClass}</p>
                <h1>{username}'s personal website</h1>
                <h2>Hello! Welcome to {username}'s home, please select your action:</h2>
                <h3><Link style={{textDecoration:'none', color: 'black'}} to={'/intro'} onClick={()=> setCurrentClass('intro')} className={currentClass==='intro' ? 'active' : ''}>1. my introduction</Link></h3>
                <h3><Link style={{textDecoration:'none', color:"black"}} to={'/contact'} onClick={()=> setCurrentClass('contact')} className={currentClass==='contact' ? 'active' : ''}>2. my contact</Link></h3>
                <h3><Link style={{textDecoration:'none', color:"black"}} to={'/message'} onClick={()=> setCurrentClass('message')} className={currentClass==='message' ? 'active' : ''}>3. Send a message</Link> </h3>
                </div>
                <Routes>
                    <Route path = "message" element={<Message/>} />
                    <Route path = "contact" element={<Contact/>} />
                    <Route path = "intro" element={<Intro username={username}/>} />
                </Routes>
                 <h3><Link to={'/'} onClick={()=> setCurrentClass('')} className={currentClass==='' ? 'hidden' : ''}>back</Link></h3>
            </BrowserRouter>
        </div>
    );
}

export default App;
