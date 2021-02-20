import React from 'react';
import ReactDOM from 'react-dom';


import './assets/index.css'
import AppRouter from './components/pages/AppRouter';



const root = document.getElementById('root')
const ele = <AppRouter />
ReactDOM.render(ele, root);

