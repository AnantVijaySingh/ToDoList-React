import React from 'react';
import PropTypes from 'prop-types';
import {} from 'react-mdl';
import { TaskCard } from './TaskCard.jsx';

var cardArray;

export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cardArray: this.props.array};

        console.log(this.state);
        console.log(this.state.cardArray);
        console.log(this.props.array);

    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('component will receive props');
        this.setState({ cardArray: this.props.array });
    }

    render() {
        return (
            <div>
                {this.state.cardArray.map((unique) =>
                    <TaskCard key={unique.taskTimeStamp} />
                )}
            </div>
        )
    }
}