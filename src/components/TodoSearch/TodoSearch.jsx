import React, { Component } from "react";
import './TodoSearch.css'
class TodoSearch extends Component {
  buttons = [
    { name: "all", title: "All" },
    { name: "active", title: "Active" },
    { name: "done", title: "Done" },
  ];
  state = {
    term: "",
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const { filter } = this.props;
    const buttons = this.buttons.map(({ name, title }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          onClick={() => this.props.onsetStatus(name)}
          className={`btn ${clazz} `}
          key={name}
        >
          {title}
        </button>
      );
    });
    return (
      <div className="content">
        <input
          type="text"
          placeholder="Enter todo"
          className="input-input"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
        <div>{buttons}</div>
      </div>
    );
  }
}

export default TodoSearch;
