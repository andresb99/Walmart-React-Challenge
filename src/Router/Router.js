import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//import components
import NavBar from '../components/NavBar/NavBar';
import Counter from '../components/counter/Counter';
import List from '../components/List/List';
import DataApi from '../components/DataApi/DataApi';
import Home from '../components/Home/Home';


const Router = () => {

    return <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/list' element={<List />} />
                <Route path='/data' element={<DataApi />} />
            </Routes>
        </BrowserRouter>
    </>;
};

export default Router;