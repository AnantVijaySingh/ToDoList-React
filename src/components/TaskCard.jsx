import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../stylesheets/TaskCards.css'

export class TaskCard extends React.Component {
    render() {
        return (
            <Card className="cards" shadow={0}>
                <div className="taskText-card">
                    {this.props.text}
                </div>
                <CardActions border>
                    <span>{this.props.timeStamp.toLocaleTimeString()}</span>
                    <span style={{float: 'right'}}>
                        <IconButton name="delete" />
                        <IconButton name="priority_high" />
                        <IconButton name="keyboard_arrow_right" />
                    </span>
                </CardActions>
            </Card>
        )
    }
}

TaskCard.propTypes = {
    text: PropTypes.string.isRequired,
    timeStamp: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.bool.isRequired
};

TaskCard.defaultProps = {
    text: "Task text for testing",
    timeStamp: new Date(),
    status: "backlog",
    priority: false
};