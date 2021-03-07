import React, {Component} from 'react';
import uniqid from 'uniqid';

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
                            <li key={uniqid()}>{index + 1}. {task}</li>
                            {/*<button onClick={deleteFunc(index)}>Delete</button>*/}
                        </div>
                    );
                })}
            </ul>
        )
    }
}

export default Overview;