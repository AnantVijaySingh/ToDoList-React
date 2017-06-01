import React from 'react';
import { Button, IconButton } from 'react-mdl';
import { TaskTextField } from './TaskTextField.jsx';
import '../stylesheets/TaskBar.css';

export class TaskBar extends React.Component {
    render() {
        return (
            <div className="taskBar">
                <TaskTextField />
                <div className="TaskBarButtons">
                    <IconButton name="create" />
                    <IconButton name="apps" />
                </div>
            </div>
        )
    }
}