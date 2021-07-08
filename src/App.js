import React, { Component } from "react";
import { connect } from "react-redux";

import { actions } from "./store";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

class App extends Component {
  formSubmitted(event) {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });

    this.props.onNewTodoChanged("");
  }

  toggleTodoDone(event, index) {
    this.props.onToggleTodoDone({
      index,
      checked: event.target.checked
    });
  }

  render() {
    return (
      <div className="App">
        <NewTodoForm
          newTodo={this.props.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.props.onNewTodoChanged}
        />
        <button onClick={() => this.props.onAllDone()}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.props.onRemoveTodo}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTodo: state.newTodo,
    todos: state.todos
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged(newTodo) {
      dispatch(actions.newTodoChanged(newTodo));
    },
    onAddTodo(todo) {
      dispatch(actions.addTodo(todo));
    },
    onToggleTodoDone(toggle) {
      console.log(toggle);
      dispatch(actions.toggleTodoDone(toggle));
    },
    onRemoveTodo(index) {
      console.log(index);

      dispatch(actions.removeTodo(index));
    },
    onAllDone() {
      dispatch(actions.allDone());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
