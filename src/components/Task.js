import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state= {
            buttonState: true,
            buttonStateText: 'Edit',
        }

        this.changeBtnState= this.changeBtnState.bind(this);
    }

    delete(id) {
        this.props.deleteFunc(id);
    }

    changeBtnState() {
        let text= '';
        if(this.state.buttonState) {
            text= 'Re-submit';
        } else {
            text= 'Edit';
        }

        this.setState( {
            buttonState: !this.state.buttonState,
            buttonStateText: text,
        })
    }

    render() {
        const {task, index}= this.props;

        return(
            <li key={task.id}>
                {index + 1}. {task.text}
                <button onClick={this.delete.bind(this, task.id)}>Delete</button>
                <button onClick={this.changeBtnState}>{this.state.buttonStateText}</button>
            </li>
        );
    }
}

export default Task;