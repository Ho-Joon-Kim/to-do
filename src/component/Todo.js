import { Component } from 'react';
import TodoList from './TodoList.js';
import '../style/Todo.css';

class Todo extends Component {
  state = { 
    todolist : ['not'],
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


  render() {
    return (
      <div className="main">
        <input 
        placeholder="todo" 
        value={this.state.todovalue}
        onChange={this.handleChange}/>
        <button onClick={this.addtodo}>버튼</button>
        <TodoList list={this.state.todolist}/>
      </div>
    );
  }
}

export default Todo;