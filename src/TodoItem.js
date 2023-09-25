import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      text: "Demo Task",
      isCompleted: false,
    };
  }
  handleCheckboxChange = () => {
    alert(this.state.isCompleted);
    this.setState({ isCompleted: !this.state.isCompleted }); // Toggle the checkbox state
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.isCompleted}
          onChange={this.handleCheckboxChange}
        />
        <label></label>
      </div>
    );
  }
}

export default TodoItem;
