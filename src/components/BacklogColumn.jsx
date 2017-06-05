import React from 'react';
import {} from 'react-mdl';
import TaskCard from './TaskCard.jsx';

var cardArray;


export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        cardArray = props;

        console.log(cardArray);

    }

    render() {
        return (
            <div>
                {cardArray.map((card) =>
                    <TaskCard key={card.taskTimeStamp} />
                )}
            </div>
        )
    }
}