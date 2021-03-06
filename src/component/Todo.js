import { Component } from 'react';
import '../style/Todo.css';

class Todo extends Component {
  state = { 
    todolist : [],
    todovalue : ""
  }

  addtodo = () => {
    this.setState({
      todolist: this.state.todolist.concat(this.state.todovalue)
    })
  }

  handleChange = (e) => {
    this.setState({
      todovalue: e.target.value
    })
  }

  componentDidMount() {
  }

  componentWillUnmount() { 
  }

  render() {
    return (
      <div className="main">
        <input 
        placeholder="todo" 
        value={this.state.todovalue}
        onChange={this.handleChange}/>
        <button onClick={this.addtodo}>버튼</button>
      </div>
    );
  }
}

export default Todo;
