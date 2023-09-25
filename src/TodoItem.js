import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
  constructor(props) {
    super(props);
    this.state = {
      toDO: {
        id: 1,
        text: "Demo Task",
        isCompleted: false
      }
    };
  }
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <label></label>
      </div>
    );
  }
}

export default TodoItem;
