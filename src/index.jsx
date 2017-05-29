import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import { PageGrid } from './components/PageGrid.jsx';
import { TaskTextField } from './components/TaskTextField.jsx';

window.React = React;

render(
    <PageGrid />,
    document.getElementById("all-content")
);
