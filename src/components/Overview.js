import React, {Component} from 'react';

class Overview extends Component {
    constructor(props) {
        super(props)
    }

    delete(id) {
        this.props.deleteFunc(id);
    }
      
    render() {
        const {tasks} = this.props;

        return (
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <div>
                            <li key={task.id}>
                                {index + 1}. {task.text}
                                <button onClick={this.delete.bind(this, task.id)}>Delete</button>
                            </li>
                        </div>
                    );
                })}
            </ul>
        )
    }
}

export default Overview;