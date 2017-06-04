import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from 'react-mdl';
import { Textfield } from 'react-mdl';
import '../stylesheets/TaskBar.css';
// import { TaskTextField } from './TaskTextField.jsx';

export class TaskBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // This binding is necessary to make `this` work in the callback
        this.createBacklogTaskCard = this.createBacklogTaskCard.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createBacklogTaskCard() {
        // alert('A name was submitted: ' + this.state.value);
        this.props.getTaskText(this.state);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="taskBar">
                <div id="taskText">
                    <Textfield
                        id="textField"
                        value={this.state.value}
                        onChange={this.handleChange}
                        label="Text..."
                        style={{width: '100%'}}
                    />
                </div>
                <div className="TaskBarButtons">
                    <IconButton onClick={this.createBacklogTaskCard} name="create" />
                    <IconButton name="apps" />
                </div>
            </div>
        )
    }
}

TaskBar.propTypes = {
    getTaskText: PropTypes.func
};