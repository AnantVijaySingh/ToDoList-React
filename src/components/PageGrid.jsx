import React from 'react';
import { Grid, Cell } from 'react-mdl';
import {TaskBar} from './TaskBar.jsx';
import '../stylesheets/main.css';
import {TaskCard} from "./TaskCard.jsx";
import { BacklogColumn } from "./BacklogColumn.jsx";
import { ToDoColumn } from "./ToDoColumn.jsx";

var backlogData = [];
var todoData = [];
var doneData = [];


export class PageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            backlogArray: backlogData,
            todoArray: todoData,
            doneArray: doneData
        };

        // console.log(backlogArray);

        // This binding is necessary to make `this` work in the callback
        // this.createBacklogTaskCard = this.createBacklogTaskCard.bind(this);
        this.processTaskText = this.processTaskText.bind(this);
    }

    createBacklogTaskCard() {
        alert('A name was submitted: ' + this.state.value);
    }

    processTaskText(task) {
        var backlogTask = {
            taskText:task.value,
            taskTimeStamp:new Date(),
            taskStatus:"backlog",
            taskPriority:false
        };
        backlogData.push(backlogTask);
        console.log(backlogData);
        this.setState(
            {
                backlogArray: backlogData
            }
        );
        console.log('Updated Array PageGrid');
        console.log(this.state.backlogArray);
    }


    // function to change the column of a tack card
    // need either the card info to create a new card altogether of simply get the key to pick the card from the map
    // another approach can be to use just one map and iterate and render though it depending upon the column key value
    // currently the state does not update on the first click but from the second

    changeColumn(nextColumn) {
        console.log('check working');
        console.log(nextColumn);
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
                        <div className="TaskColumnHeading" id="backlogColumn">
                            <span>Backlog</span>
                            {
                                <BacklogColumn array={this.state.backlogArray} changeColumnStatus={this.changeColumn} />
                            }
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <div className="TaskColumnHeading" id="todoColumn">
                            <span>To Do</span>
                            {
                                <ToDoColumn array={this.state.todoArray} />
                            }
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <div className="TaskColumnHeading" id="doneColumn">
                            <span>Done</span>
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