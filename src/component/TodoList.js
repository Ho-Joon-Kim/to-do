import { Component } from 'react';
import '../style/Todo.css';

class TodoList extends Component {


  list = () => {
    let listItem = this.props.list.map((name) =>
      <li>{name}</li>
    );

    return listItem;
  }


  render() {
    return (
      <div>
        <ul>{<this.list/>}</ul>
      </div>
    );
  }
}

export default TodoList;