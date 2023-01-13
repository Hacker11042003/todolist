import React, { Component } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";
import TodoHeader from "../AppHeader/AppHeader";
import TodoSearch from "../TodoSearch/TodoSearch";

class App extends Component {
  state = {
    todos: [
      { title: "Learn Js", completed: false, importand: false, id: 1 },
      { title: "Learn React", completed: false, importand: false, id: 2 },
      { title: "Learn Python", completed: false, importand: false, id: 3 },
      { title: "Learn Node js", completed: false, importand: false, id: 4 },
    ],
    term: "",
    filter: "active", //all/active/done
  };

  addTodo = (newTodo) => {
    const oldId = this.state.todos.map((element) => element.id);
    const todo = {
      title: newTodo,
      completed: false,
      importand: false,
      id: oldId.at(-1) + 1 || 1,
    };
    this.setState({ todos: [...this.state.todos, todo] });
  };

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((el) => el.id !== id) });
  };

  completeTodo = (id) => {
    const index = this.state.todos.findIndex((el) => el.id === id);
    const oldTodo = this.state.todos[index];
    const before = this.state.todos.slice(0, index);
    const after = this.state.todos.slice(index + 1);
    const upTodo = {
      ...oldTodo,
      completed: !oldTodo.completed,
    };
    this.setState({ todos: [...before, upTodo, ...after] });
    console.log(upTodo);
  };
  impotandTodo = (id) => {
    const index = this.state.todos.findIndex((el) => el.id === id);
    const oldTodo = this.state.todos[index];
    const before = this.state.todos.slice(0, index);
    const after = this.state.todos.slice(index + 1);
    const upTodo = {
      ...oldTodo,
      importand: !oldTodo.importand,
    };
    this.setState({ todos: [...before, upTodo, ...after] });
    console.log(upTodo);
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.completed);
      case "done":
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  }
  setStatus = (name) => {
    this.setState({
      filter: name,
    });
  };

  render() {
    const { todos, term, filter } = this.state;
    const visebleItems = this.filter(this.search(todos, term), filter);
    const doneCount = todos.filter((el) => el.completed).length; //count
    const allCount = todos.length - doneCount;

    return (
      <div className="mx-auto" style={{ width: 550 }}>
        <TodoHeader doneCount={doneCount} allCount={allCount} />
        <TodoSearch
          onSearchChange={this.onSearchChange}
          filter={this.filter}
          onsetStatus={this.setStatus}
        />
        <TodoList
          todoData={visebleItems}
          onDelete={this.deleteTodo}
          onCompleted={this.completeTodo}
          onImportand={this.impotandTodo}
        />
        <TodoAdd onAddTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;