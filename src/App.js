import React, {Component} from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      task:'',
      tasks: [],
    };

    this.recordInput= this.recordInput.bind(this);
    this.addTask= this.addTask.bind(this);
    this.deleteTask= this.deleteTask.bind(this);
  }

  recordInput(e) {
    this.setState({
      task: e.target.value,
    })
  }

  addTask() {
    let newTask= {
      text: this.state.task,
      id: uniqid(),
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }))
  }

  deleteTask(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el.id !== id )
    }));
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.recordInput}></input>
        <button onClick={this.addTask}>Add Task</button>
        <Overview tasks={this.state.tasks} deleteFunc={this.deleteTask}/>
      </div>
    );
  }
}

export default App;