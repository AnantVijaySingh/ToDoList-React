import React from 'react';
import PropTypes from 'prop-types';
import {} from 'react-mdl';
import { TaskCard } from './TaskCard.jsx';

var cardArray;

export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cardArray: this.props.array};

        this.processUserAction = this.processUserAction.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('component will receive props');
        console.log(this.props.array);
        this.setState({ cardArray: [...this.props.array] });
    }

    processUserAction(action) {
        console.log(action);
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