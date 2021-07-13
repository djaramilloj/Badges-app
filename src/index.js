import React from 'react';
import ReactDOM from 'react-dom';
// Components
// import Badge from './components/Badge.jsx';
import BadgeNew from './pages/BadgeNew.jsx';
// styles
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, container);
