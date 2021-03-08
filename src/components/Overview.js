import React, {Component} from 'react';
import Task from './Task';

class Overview extends Component {
    constructor(props) {
        super(props)
    }
      
    render() {
        const {tasks, deleteFunc} = this.props;

        return (
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <div>
                            <Task task={task} index={index} deleteFunc={deleteFunc}/>
                        </div>
                    );
                })}
            </ul>
        )
    }
}

export default Overview;