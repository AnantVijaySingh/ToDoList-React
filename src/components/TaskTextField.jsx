/**
 * Created by anant on 29/05/2017.
 */
import React from 'react';
import { Textfield } from 'react-mdl';


export class TaskTextField extends React.Component {
    render() {
        return (
            <Textfield
                onChange={() => {}}
                label="Text..."
                style={{width: '200px'}}
            />
        )
    }
}