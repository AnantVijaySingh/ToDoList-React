import React from 'react';
import {} from 'react-mdl';
import TaskCard from './TaskCard.jsx';

var cardArray = [];
var testArray = [{id:1, name:"a"},{id:2, name:"b"}];

export class BacklogColumn extends React.Component {

    constructor(props) {
        super(props);
        cardArray.push(props);

        console.log(cardArray);
        console.log(testArray);

    }

    render() {
        return (
            <div>
                }
                {testArray.map((unique) =>
                    <p key={unique.id}>{unique.name}</p>
                )}
            </div>
        )
    }
}