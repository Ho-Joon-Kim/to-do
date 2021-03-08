import { Component } from 'react';
import TodoList from './TodoList.js';
import '../style/Todo.css';

class Todo extends Component {
  state = { 
    todolist : ['not'],
    todovalue : ""
  }

  addtodo = () => {
    if (this.state.todovalue !== '') {
      this.setState({
        todolist: this.state.todolist.concat(this.state.todovalue)
      })
      this.setState({
        todovalue: ""
      })
    }else{
      alert("공백은 입력할 수 없습니다!")
    }
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
        className="textbox"
        placeholder="add" 
        value={this.state.todovalue}
        onChange={this.handleChange}/>
        <button className="addbtn" onClick={this.addtodo}>버튼</button>
        <TodoList list={this.state.todolist}/>
      </div>
    );
  }
}

export default Todo;