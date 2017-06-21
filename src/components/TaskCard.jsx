import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, Icon, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../stylesheets/TaskCards.css'

export class TaskCard extends React.Component {
    render() {
        return (
            <Card className="cards" shadow={0}>
                <CardTitle expand className="taskText-card">
                        {this.props.text}
                </CardTitle>
                <CardActions border style={{display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: 'black'}}>
                    <span>{this.props.timeStamp.toLocaleTimeString()}</span>
                    <div className="mdl-layout-spacer" />
                    <IconButton name="delete" />
                    <IconButton name="priority_high" />
                    <IconButton name="keyboard_arrow_right" />
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
    status: "backlog",
    priority: false
};