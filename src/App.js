import React from 'react';
import './App.css';
import Header from './component/Header/Header.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import Profile from './component/Profile/Profile.jsx'
import Dialogs from './component/Dialogs/Dialogs.jsx'
import News from './component/News/News.jsx'
import Settings from './component/Settings/Settings.jsx'
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
};

export default App;
