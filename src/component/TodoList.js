import { Component } from 'react';
import '../style/TodoList.css';

class TodoList extends Component {

  list = () => {
    let listItem = this.props.list.map((name) =>
      <li className="list">{name}</li>
    );

    return listItem;
  }

  render() {
    return (
      <div>
        <ul className="listheader">{<this.list/>}</ul>
      </div>
    );
  }
}

export default TodoList;