import React from 'react';
import PropTypes from 'prop-types';
import {} from 'react-mdl';
import { TaskCard } from './TaskCard.jsx';

var cardArray;

export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cardArray: this.props.array};

    }

    componentWillReceiveProps(nextProps) {
        console.log('component will receive props');
        console.log(this.props.array);
        this.setState({ cardArray: [...this.props.array] });
    }

    render() {
        return (
            <div>
                {this.state.cardArray.map((unique) =>
                    <TaskCard key={unique.taskTimeStamp} text={unique.taskText} />
                )}
            </div>
        )
    }
}