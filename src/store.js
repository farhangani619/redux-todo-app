const initialState = {
  newTodo: "",
  todos: [
    {
      text: "Learn React",
      completed: false
    },
    {
      text: "Learn jsx",
      completed: false
    },
    {
      text: "Learn Props",
      completed: false
    }
  ]
};

export const actions = {
  newTodoChanged(newTodo) {
    return {
      type: "NEW_TODO_CHANGED",
      newTodo
    };
  },
  addTodo(todo) {
    return {
      type: "ADD_TODO",
      todo
    };
  },
  toggleTodoDone(toggle) {
    return {
      type: "TOGGLE_TODO_DONE",
      toggle
    };
  },
  removeTodo(index) {
    return {
      type: "REMOVE_TODO",
      index
    };
  },
  allDone() {
    return {
      type: "ALL_DONE"
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_TODO_CHANGED": {
      return {
        ...state,
        newTodo: action.newTodo
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case "TOGGLE_TODO_DONE": {
      const todos = [...state.todos]; // copy the array
      todos[action.toggle.index] = {
        ...todos[action.toggle.index],
        done: action.toggle.checked // update done property on copied todo
      }; // copy the todo can also use Object.assign
      return {
        ...state,
        todos
      };
    }
    case "REMOVE_TODO": {
      const todos = [...state.todos]; // copy the array
      todos.splice(action.index, 1);
      return {
        ...state,
        todos
      };
    }
    case "ALL_DONE": {
      const todos = state.todos.map((todo) => {
        return {
          title: todo.title, // can also do ...todo
          done: true
        };
      });

      return {
        ...state,
        todos
      };
    }

    default:
      return state;
  }
}
