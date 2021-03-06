import React from 'react';
import PropTypes from 'prop-types';
import {} from 'react-mdl';
import { TaskCard } from './TaskCard.jsx';

var cardArray;

export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardArray: this.props.array,
            nextColumn: ''
        };

        this.processUserAction = this.processUserAction.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('component will receive props');
        console.log(this.props.array);
        this.setState({ cardArray: [...this.props.array] });
    }
    // Sends which column the card needs to be sent to
    // need to send key to ensure that the correct object is modified in the map
    processUserAction(action) {
        if(action==='toDoColumn') {
            this.setState(
                {
                    nextColumn: 'next'
                }
            )
            this.props.changeColumnStatus(this.state.nextColumn);
        }
    }

    render() {
        return (
            <div>
                {this.state.cardArray.map((unique) =>
                    <TaskCard key={unique.taskTimeStamp} text={unique.taskText} timeStamp={unique.taskTimeStamp} priority={unique.taskPriority} userAction={this.processUserAction} />
                )}
            </div>
        )
    }
}

BacklogColumn.propTypes = {
    changeColumnStatus: PropTypes.func
};