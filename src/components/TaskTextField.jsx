/**
 * Created by anant on 29/05/2017.
 */
import React from 'react';
import { Textfield } from 'react-mdl';
import '../stylesheets/TaskBar.css';


export class TaskTextField extends React.Component {
    render() {
        return (
            <div id="taskText">
                <Textfield
                    id="textField"
                    onChange={() => {}}
                    label="Text..."
                    style={{width: '100%'}}
                />
            </div>
        )
    }
}