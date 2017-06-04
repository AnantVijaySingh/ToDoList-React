import React from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../stylesheets/TaskCards.css'

export class TaskCard extends React.Component {
    render() {
        return (
            <Card className="cards" shadow={0}>
                <div className="taskText-card">
                    Test task: Send emails to marketing departments informing them about the new product features.
                </div>
                <CardActions border>
                    <span>TimeStamp</span>
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