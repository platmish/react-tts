import React from 'react';
import './App.css';
import Header from './component/Header.jsx'
import Navbar from './component/Navbar.jsx'
import Profile from './component/Profile.jsx'

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    )
};

export default App;
