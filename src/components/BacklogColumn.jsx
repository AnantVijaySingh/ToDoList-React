import React from 'react';
import {} from 'react-mdl';
import { TaskCard } from './TaskCard.jsx';

var cardArray;

export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        cardArray = this.props.array;

        console.log(cardArray);
    }

    render() {
        return (
            <div>
                {cardArray.map((unique) =>
                    <TaskCard key={unique.taskTimeStamp} />
                )}
            </div>
        )
    }
}