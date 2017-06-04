import React from 'react';
import { Grid, Cell } from 'react-mdl';
import {TaskBar} from './TaskBar.jsx';
import '../stylesheets/main.css';
import {TaskCard} from "./TaskCard.jsx";

export class PageGrid extends React.Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="headerGrid">
                    <Cell col={12} className="title">SAMAYPAR</Cell>
                </Grid>
                <Grid className="taskBarGrid">
                    <Cell col={6} phone={4} offsetDesktop={3}>
                        <TaskBar />
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