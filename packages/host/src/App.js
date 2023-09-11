import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';

export const App = ()=>{
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Landing/>
            </div>
        </BrowserRouter>
    )
}

export default App;