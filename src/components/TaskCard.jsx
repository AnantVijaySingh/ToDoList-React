import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, Icon, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../stylesheets/TaskCards.css'

export class TaskCard extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.deleteTaskCard = this.deleteTaskCard.bind(this);
        this.changePriority = this.changePriority.bind(this);
        this.moveToToDo = this.moveToToDo.bind(this);
    }

    deleteTaskCard() {
        // alert('A name was submitted: ' + this.state.value);
        this.props.userAction("delete");
    }

    changePriority() {
        this.props.userAction("flipPriority");
    }

    moveToToDo() {
        this.props.userAction("toDoColumn");
    }

    render() {
        return (
            <Card className="cards" shadow={0}>
                <CardTitle expand className="taskText-card">
                        {this.props.text}
                </CardTitle>
                <CardActions border style={{display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: 'black'}}>
                    <span>{this.props.timeStamp.toLocaleTimeString()}</span>
                    <div className="mdl-layout-spacer" />
                    <IconButton onClick={this.deleteTaskCard} name="delete" />
                    <IconButton onClick={this.changePriority} name="priority_high" />
                    <IconButton onClick={this.moveToToDo} name="keyboard_arrow_right" />
                </CardActions>
            </Card>
        )
    }
}

TaskCard.propTypes = {
    text: PropTypes.string.isRequired,
    timeStamp: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.bool.isRequired,
    userAction: PropTypes.func
};

TaskCard.defaultProps = {
    status: "backlog",
    priority: false
};