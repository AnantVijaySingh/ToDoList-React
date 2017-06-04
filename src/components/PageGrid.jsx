import React from 'react';
import { Grid, Cell } from 'react-mdl';
import {TaskBar} from './TaskBar.jsx';
import '../stylesheets/main.css';
import {TaskCard} from "./TaskCard.jsx";

var backlogArray = [{a:1},{b:2},{c:3}];
var todoArray = [];
var doneArray = [];



export class PageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // This binding is necessary to make `this` work in the callback
        this.createBacklogTaskCard = this.createBacklogTaskCard.bind(this);
        this.processTaskText = this.processTaskText.bind(this);
    }

    createBacklogTaskCard() {
        alert('A name was submitted: ' + this.state.value);
    }

    processTaskText(task) {
        alert('It worked: ' + task.value);
        var backlogTask = {
            taskText:task.value,
            taskTimeStamp:Date.now(),
            taskStatus:"backlog",
            taskPriority:false
        };
        backlogArray.push(backlogTask);
    }


    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="headerGrid">
                    <Cell col={12} className="title">SAMAYPAR</Cell>
                </Grid>
                <Grid className="taskBarGrid">
                    <Cell col={6} phone={4} offsetDesktop={3}>
                        <TaskBar getTaskText={this.processTaskText} />
                    </Cell>
                </Grid>
                <Grid className="taskCardGrid">
                    <Cell col={4}>
                        <div id="backlogColumn">
                            Backlog
                            <TaskCard/>
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <div id="todoColumn">
                            To Do
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <div id="doneColumn">
                            Done
                        </div>
                    </Cell>
                </Grid>
                {/*<Grid className="footerGrid">*/}
                    {/*<Cell col={6} tablet={8}>6 (8 tablet)</Cell>*/}
                    {/*<Cell col={4} tablet={6}>4 (6 tablet)</Cell>*/}
                    {/*<Cell col={2} phone={4}>2 (4 phone)</Cell>*/}
                {/*</Grid>*/}
            </div>
        )
    }

}