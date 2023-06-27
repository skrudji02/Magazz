import React, {useContext} from 'react';
import {Routes, Route, Router} from 'react-router-dom'
import {observer} from 'mobx-react-lite';
import {authRoutes, publicRoutes} from "../routes";
import { Context } from '../index';
import Home from "../components/Home";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Router>
            <Routes>
    
          
           
            </Routes>
        </Router>
    );
});

export default AppRouter;