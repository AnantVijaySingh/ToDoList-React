/**
 * Task text field has been moved to Task bar to help capture the data from the task bar
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
                    value={this.state.value}
                    onChange={this.handleChange}
                    label="Text..."
                    style={{width: '100%'}}
                />
            </div>
        )
    }
}